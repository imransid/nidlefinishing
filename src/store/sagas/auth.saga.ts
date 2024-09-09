import { type Collection } from '@nozbe/watermelondb';
import axios from 'axios';
import moment from 'moment';
import { put, select } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

import {
  type AppItemImage,
  type IDataObject,
  type IDefect,
  type IDefectSequence,
  type IOperationBreakDowns
} from '@/models/defect';
import { BASE_URL, SIGN_IN_URL } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';

import database from '../database';
import {
  handleDeletDefectTableFromDB,
  handleDeletOperationTableFromDB,
  handleInsertDefectListInDB
} from '../database/helper/defectEntry.helper';
// import { type Defect } from '../database/model/defectTable';
import { type OperationBreakDown } from '../database/model/operationBreakdownTable';
import {
  addfilterdItemImages,
  addQueryDataForDefectEntry,
  resetfilterdItemImages
} from '../slices/features/DefectList/slice';
import { stopEndTableLoader } from '../slices/features/endTableCheck/slice';
import {
  stopSettingLoader,
  updateGlobalLoader,
  updateSyncData,
  updateSyncFailed
} from '../slices/features/setting/slice';
import { type TreeNode } from '../slices/features/setting/types';
import { checkLoaderAction, stopInfiniteLoader, usersSlice } from '../slices/features/users/slice';
import { type AccessTokenInfo, type LoginResponse } from '../types/types';
import { type RootState } from '..';

import {
  getCurrentItemsImages,
  getDefectListWithSequence,
  getOperationBreakDowns,
  getQmsDefectSequence
} from './defectApi';
import { offlineQCData } from './offline.qcLunchData';
import { syncProcessNow } from './sync.saga';
import { getVariance } from './variance.saga';
const { call } = Effects;

const apiUrl = BASE_URL + '/' + SIGN_IN_URL;

interface IPayload {
  email: string;
  password: string;
}

interface IGetUserActionPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}

const loginAPI = async (payload: IPayload): Promise<LoginResponse | undefined> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestData = {
      email: payload.email,
      password: payload.password
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await axios.post(apiUrl, requestData, config);
    return response.data;
  } catch (error) {
    console.error('Error in loginAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

export function* loginSaga(
  payload: IGetUserActionPayload
): Generator<any, void, AccessTokenInfo | undefined | any> {
  try {
    const response: any = yield call(loginAPI, payload.payload);

    if (response !== undefined) {
      // when login successfully call all api to data loaded in our DB...

      yield put(updateGlobalLoader(true));

      yield call(getVariance, response.data.accessToken);

      yield call(offlineQCData, response.data);

      // update org tree
      const payloadIs = {
        accessToken: response.data.accessToken
      };

      const responseOrgTree = yield call(callBackAPI, payloadIs);

      if (responseOrgTree !== undefined) {
        yield put(updateSyncData(responseOrgTree.data));
      } else {
        // failed
        yield put(updateSyncFailed());
      }

      // update org tree
      yield put(usersSlice.actions.getUserSuccessAction(response.data));

      // const currentStyleData: IStyles | undefined = yield call(getCurrentStyles, response.data);
      const defectListData: IDefect | undefined = yield call(
        getDefectListWithSequence,
        response.data
      );
      const operationsBreakDownData: IOperationBreakDowns | undefined = yield call(
        getOperationBreakDowns,
        response.data
      );
      const itemImageData: IDataObject | undefined = yield call(
        getCurrentItemsImages,
        response.data
      );
      const qmsDefectSequence: IDefectSequence | undefined = yield call(
        getQmsDefectSequence,
        response.data
      );
      if (
        defectListData !== undefined &&
        operationsBreakDownData !== undefined &&
        itemImageData !== undefined &&
        qmsDefectSequence !== undefined
      ) {
        yield put(
          addQueryDataForDefectEntry({
            // defectListData,
            operationsBreakDownData,
            itemImageData,
            qmsDefectSequence
          })
        );

        void handleInsertDefectListInDB(defectListData);
      }

      // yield put(updateGlobalLoader(false));
    } else {
      // case undefined
      const data = 'The email or password you entered is incorrect. Please try again.';
      ToastPopUp(data);
      yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
    }
  } catch (error) {
    // if (callback) {
    //   callback({ success: false, data: null });
    // }
  }
}

// check Loader
export function* checkLoader(): Generator<any, void, any> {
  try {
    const endTableLoading: boolean = yield select(
      (state: RootState) => state.endTableCheck.isLoading
    );

    const endReportLoading: boolean = yield select(
      (state: RootState) => state.endTableCheck.reportColorLoader
    );

    // const checkGlobalAppSyncLoader = yield select(
    //   (state: RootState) => state.setting.globalAppSyncLoader
    // );

    // if (checkGlobalAppSyncLoader === true) {
    //   yield put(updateGlobalLoader(false));
    // }

    // user isLoading

    const isLoading = yield select((state: RootState) => state.users.user.isLoading);

    if (isLoading === true) {
      yield put(stopInfiniteLoader());
    }

    if (endReportLoading) {
      yield put(checkLoaderAction());
    }

    const settingLoader: boolean = yield select((state: RootState) => state.setting.loader);
    if (endTableLoading) {
      // end table loader stop loading
      yield put(stopEndTableLoader());
    } else if (settingLoader) {
      // case undefined
      yield put(stopSettingLoader());
    }

    yield database.write(async () => {
      // Find the buyer with the specified ID
      const count: any = await database.get('count').query().fetch();

      if (count !== undefined && count !== null && count.length > 0) {
        // 3 days app clear everything

        if (count[0].productionFireTime !== '') {
          const productionFireTime = moment(count[0].productionFireTime).format('YYYY-MM-DD');

          const todayDate = moment().format('YYYY-MM-DD');
          if (!moment(todayDate).isSame(productionFireTime)) {
            const index = count.length - 1;

            await database.get('count').create((transaction: any) => {
              transaction.total = 0;
              transaction.pass = 0;

              transaction.alter = 0;
              transaction.reject = 0;
              transaction.offlinePass = 0;
              transaction.productionFireTime = todayDate;

              transaction.repairPass = 0;
              transaction.repairAlter = 0;
              transaction.repairReject = 0;
            });

            await count[index].destroyPermanently();
          }
        }
      }
    });
  } catch (error) {
    // if (callback) {
    //   callback({ success: false, data: null });
    // }
  }
}

const callBackAPI = async (payload: any): Promise<TreeNode[] | undefined> => {
  try {
    const token: string = payload?.accessToken !== undefined ? payload.accessToken : '';
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const apiUrl = `${BASE_URL}/api/org:loggedUserOrgtree`;

    const res = axios
      .get(apiUrl, { headers })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });

    return await res;
  } catch (error) {
    console.error('Error in callBackAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

// updated check
// check Loader
const handleOperationList = async (
  selectedStyleId: string,
  operationsBreakDownData: IOperationBreakDowns
): Promise<void> => {
  if (selectedStyleId !== '') {
    const filterdOperationsBreakDownData =
      operationsBreakDownData?.data.content.operationBreakDowns.filter(
        op => op.style.id.toString() === selectedStyleId
      );
    if (filterdOperationsBreakDownData != null) {
      // console.log(filterdOperationsBreakDownData,'filterdOperationsBreakDownData')
      // dispatch(setOpeartionBreakDown(filterdOperationsBreakDownData))
      try {
        await database.write(async () => {
          const operationCollection: Collection<OperationBreakDown> =
            database.collections.get('operation');
          for (const operationData of filterdOperationsBreakDownData) {
            await operationCollection.create((operation: OperationBreakDown) => {
              operation.operation_id = operationData.operation.id;
              operation.operation_name = operationData.operation.name;
            });
          }
        });
      } catch (e) {
        console.warn('Operation filter data not set', e);
      }
    }
  }
};

export function* syncNow(): Generator<any, void, any> {
  try {
    yield put(updateGlobalLoader(true));

    yield call(syncProcessNow);
    const accessToken = yield Effects.select(
      (state: RootState) => state.users.user.data?.accessToken
    );

    const payloadIs = {
      accessToken
    };

    yield call(getVariance, '');

    const defectListData = yield call(getDefectListWithSequence, payloadIs);
    const operationsBreakDownData = yield call(getOperationBreakDowns, payloadIs);
    const itemImageData = yield call(getCurrentItemsImages, payloadIs);
    const qmsDefectSequence = yield call(getQmsDefectSequence, payloadIs);
    const selectedStyleId = yield select((state: RootState) => state.setLineStyle.styleID);
    const selectedItemId = yield select((state: RootState) => state.setLineStyle.itemId);
    const selectedItemImages = yield select(
      (state: RootState) => state.defectList.filterdItemImages
    );
    /** * Filterd  Sketches */
    if (itemImageData != null) {
      const filterdItemImages = itemImageData.data.content.appItemImages.filter(
        (item: AppItemImage) => item.item_id === selectedItemId
      );
      if (selectedItemImages.length !== 0) yield put(resetfilterdItemImages());
      yield put(addfilterdItemImages(filterdItemImages));
    }
    /** * Filterd  Sketches */
    if (
      defectListData !== undefined &&
      operationsBreakDownData !== undefined &&
      itemImageData !== undefined &&
      qmsDefectSequence !== undefined
    ) {
      yield put(
        addQueryDataForDefectEntry({
          // defectListData,
          operationsBreakDownData,
          itemImageData,
          qmsDefectSequence
        })
      );
      yield handleDeletDefectTableFromDB();
      yield handleInsertDefectListInDB(defectListData);

      yield handleDeletOperationTableFromDB();
      yield handleOperationList(selectedStyleId, operationsBreakDownData);
      yield put(updateGlobalLoader(false));
    }
  } catch (error) {
    // failed update
    yield put(updateSyncFailed());
  }
}
