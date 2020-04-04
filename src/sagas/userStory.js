import { put, call } from 'redux-saga/effects';
import UserStoryActions from '../actions/userStory';
import AppActions from '../actions/app';
import { history } from '../reducers';

// Get all user stories request.
export function* getAllUserStoryRequest(api, action) {
  const response = yield api.getAllUserStories();
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.getAllUserStorySuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.getAllUserStoryFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Create new user story request.
export function* createNewUserStoryRequest(api, action) {
  const {payload} = action;
  const response = yield api.createNewUserStory(payload);
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.createNewUserStorySuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.createNewUserStoryFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Update user story request.
export function* updateUserStoryRequest(api, action) {
  const {payload} = action;
  const response = yield api.updateUserStory(payload);
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.updateUserStorySuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.updateUserStoryFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}