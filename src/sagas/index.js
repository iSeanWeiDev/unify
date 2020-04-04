import { takeLatest, all } from 'redux-saga/effects';
import API from '../services/api';

import {AuthTypes} from '../actions/auth';
import { UserStoryTypes } from '../actions/user-story';
import { TagTypes } from '../actions/tag';

import {
  loginRequest
} from './auth';

import {
  getAllFeaturesRequest,
  createNewFeatureRequest,
  updateFeatureRequest,
  getTasksRequest,
  createNewTaskRequest,
  updateTaskRequest
} from './user-story'

import {
  getAllTagsRequest,
  createNewTagRequest
} from  './tag';

const api = API.create();

export default function* root() {
  yield all([
    // ------------------------- App Sagas
    
    // ------------------------- Authentication Sagas
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest, api),

    // ------------------------- User Story Sagas
    takeLatest(UserStoryTypes.GET_ALL_FEATURES_REQUEST, getAllFeaturesRequest, api),
    takeLatest(UserStoryTypes.CREATE_NEW_FEATURE_REQUEST, createNewFeatureRequest, api),
    takeLatest(UserStoryTypes.UPDATE_FEATURE_REQUEST, updateFeatureRequest, api),
    takeLatest(UserStoryTypes.GET_TASKS_REQUEST, getTasksRequest, api),
    takeLatest(UserStoryTypes.CREATE_NEW_TASK_REQUEST, createNewTaskRequest, api),
    takeLatest(UserStoryTypes.UPDATE_TASK_REQUEST, updateTaskRequest, api),

    takeLatest(TagTypes.GET_ALL_TAGS_REQUEST, getAllTagsRequest, api),
    takeLatest(TagTypes.CREATE_NEW_TAG_REQUEST, createNewTagRequest, api),
  ])
}
