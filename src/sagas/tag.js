import { put, call } from 'redux-saga/effects';
import TagActions from '../actions/tag';
import AppActions from '../actions/app';
import { history } from '../reducers';

export function* getAllTagsRequest(api, action) {
  const response = yield api.getAllTags();
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(TagActions.getAllTagsSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(TagActions.getAllTagsFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}

export function* createNewTagRequest(api, action) {
  const {payload} = action;
  const response = yield api.createNewTag(payload);
  if (response.ok) {
    if (response.data.data !== "No tenant connection") {
      yield put(TagActions.createNewTagSuccess(response.data.data));
    } else {
      yield put(AppActions.clearRequest());
      yield call(history.push, '/login');
    }
  } else {
    yield put(TagActions.createNewTagFailure());
    yield put(AppActions.clearRequest());
    yield call(history.push, '/login');
  }
}