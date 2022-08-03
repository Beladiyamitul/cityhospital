import { call, put, takeEvery ,all } from 'redux-saga/effects'
import { LoginAPI } from '../../common/api/auth.api';
import { emailVerify } from '../Action/Auth.action';
import * as ActionType from "../ActionType"


function* loginsaga(action) {
   try {
      const user = yield call(LoginAPI, action.payload);
    
      yield put({text:user.alert , color: "success"})
      yield put(emailVerify(user));
   } catch (e) {

      yield put({text : e.alert , color: "error"})

      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* watchsaga() {
  yield takeEvery(ActionType.AUTH_LOGIN, loginsaga);
}


export function* authSagaCall () {
   yield all ([
      watchsaga()
   ])
 }

