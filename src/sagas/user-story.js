import { put, call } from 'redux-saga/effects';
import UserStoryActions from '../actions/user-story';
import AppActions from '../actions/app';
import { history } from '../reducers';

// Get all feature request.
export function* getAllFeaturesRequest(api, action) {
  const response = yield api.getAllFeatures();
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.getAllFeaturesSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
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
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.createNewFeatureSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.createNewFeatureFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Update feature request.
export function* updateFeatureRequest(api, action) {
  const {payload} = action;
  const response = yield api.updateFeature(payload);
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.updateFeatureSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.updateFeatureFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Get all tasks request.
export function* getTasksRequest(api, action) {
  const response = yield api.getTasks();
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.getTasksSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.getTasksFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

// Create new task request.
export function* createNewTaskRequest(api, action) {
  const {payload} = action;
  const response = yield api.createNewTask(payload);
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(UserStoryActions.createNewTaskSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(UserStoryActions.createNewTaskFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}