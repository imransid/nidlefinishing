import {put, select} from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import {type AccessTokenInfo, type LoginResponse} from '../types/types';
import {commonGetAPI, loginAPI} from './helper/api.saga';
import ToastPopUp from '@/utils/Toast.android';
import {settingSlice} from '../slices/features/settings/slice';
import {usersSlice} from '../slices/features/users/slice';
import {setLineSlice} from '../slices/features/setLineProcess/slice';
import {
  BASE_URL,
  FINISHING_ORG,
  FINISHING_PROCESS_LIST,
  SIGN_IN_URL,
} from '@/utils/environment';
const {call} = Effects;
interface IGetUserActionPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}

export function* loginSaga(
  payload: IGetUserActionPayload,
): Generator<any, void, AccessTokenInfo | undefined | any> {
  try {
    yield put(settingSlice.actions.setGlobalLoaderAction({status: true}));

    const response: any = yield call(loginAPI, payload.payload);

    if (response !== undefined) {
      yield put(settingSlice.actions.setGlobalLoaderAction({status: false}));
      // update org tree
      yield put(usersSlice.actions.getUserSuccessAction(response.data));

      let props = {
        url: BASE_URL + '/' + FINISHING_ORG,
        token: response.data.accessToken,
      };

      const responseSetLineProcess: any = yield call(commonGetAPI, props);

      props.url = BASE_URL + '/' + FINISHING_PROCESS_LIST;

      const responseFinishProcessList: any = yield call(commonGetAPI, props);

      console.log('responseFinishProcessList', responseFinishProcessList);

      if (responseSetLineProcess !== undefined) {
        let modFinishData = responseSetLineProcess.data.map((e: any) => {
          e.label = e.name;
          e.value = e.id;
          return e;
        });

        yield put(setLineSlice.actions.setFinishOrg(modFinishData));
      }

      // for process List
      if (responseFinishProcessList !== undefined) {
        let modFinishData = responseFinishProcessList.data.map((e: any) => {
          e.label = e.name;
          e.value = e.id;
          return e;
        });

        yield put(setLineSlice.actions.setFinishOrg(modFinishData));
      }
    } else {
      // case undefined
      const data =
        'The email or password you entered is incorrect. Please try again.';
      ToastPopUp(data);
      yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
    }
  } catch (error) {
    console.error(error);
  }
}
