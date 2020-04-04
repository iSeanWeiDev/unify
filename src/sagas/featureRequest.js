import { put, call } from 'redux-saga/effects';
import FeatureRequestActions from '../actions/featureRequest';
import AppActions from '../actions/app';
import { history } from '../reducers';

// Get all feature request.
export function* getAllFeaturesRequest(api, action) {
  const response = yield api.getAllFeatures();
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(FeatureRequestActions.getAllFeaturesSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(FeatureRequestActions.getAllFeaturesFailure());
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
      yield put(FeatureRequestActions.createNewFeatureSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(FeatureRequestActions.createNewFeatureFailure());
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
      yield put(FeatureRequestActions.updateFeatureSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(FeatureRequestActions.updateFeatureFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}
