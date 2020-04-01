import { put, call } from 'redux-saga/effects';
import UserStoryActions from '../actions/user-story';
import AppActions from '../actions/app';
import { history } from '../reducers';

// Get all feature request.
export function* getAllFeaturesRequest(api, action) {
  const response = yield api.getAllFeatures();
  if (response.ok) {
    yield put(UserStoryActions.getAllFeaturesSuccess(response.data.data));
  } else {
    yield put(UserStoryActions.getAllFeaturesFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Create new feature request.
export function* createNewFeatureRequest(api, action) {
  const {payload} = action;
  const response = yield api.createNewFeature(payload);
  if (response.ok) {
    yield put(UserStoryActions.createNewFeatureSuccess(response.data.data));
  } else {
    yield put(UserStoryActions.createNewFeatureFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Get user story request.
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