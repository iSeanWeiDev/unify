import { put, call } from 'redux-saga/effects';
import AppActions from '../actions/app';
import AuthActions from '../actions/auth';
import { history } from '../reducers';

// Login
export function* loginRequest(api, action) {
  const {payload} = action;
  // Send Login Request {POST}
  const response = yield api.postLogin(payload);
  if (response.ok) {
    // Render data to login success
    window.tokenData = response.data;
    yield put(AppActions.appAuthenticated(response.data));
    yield put(AuthActions.loginSuccess(response.data))
  } else {
    // Render data to login failure
    yield put(AuthActions.loginFailure(response.data));
  }
}