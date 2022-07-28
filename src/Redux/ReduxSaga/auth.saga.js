import { call, put, takeEvery ,all } from 'redux-saga/effects'
import { LoginAPI } from '../../common/api/auth.api';
import * as ActionType from "../ActionType"


function* loginsaga(action) {
   try {
      const user = yield call(LoginAPI(), action.payload);
      yield put({type: ActionType.EMAIL_VERIFY, payload: user});
   } catch (e) {
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

