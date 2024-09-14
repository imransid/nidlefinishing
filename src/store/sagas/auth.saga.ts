import {put, select} from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import {type AccessTokenInfo, type LoginResponse} from '../types/types';
import {loginAPI} from './helper/api.saga';
import ToastPopUp from '@/utils/Toast.android';
import {settingSlice} from '../slices/features/settings/slice';
import {usersSlice} from '../slices/features/users/slice';
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
