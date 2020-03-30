import { put, call } from 'redux-saga/effects';
import UserStoryActions from '../actions/user-story';
import AppActions from '../actions/app';
import { history } from '../reducers';

export function* getUserStoryRequest(api, action) {
  const response = yield api.getUserStory();
  if (response.ok) {
    // Render data to login success
    yield put(UserStoryActions.getUserStorySuccess(response.data));
  } else {
    // Render data to login failure
    yield put(UserStoryActions.getUserStoryFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}