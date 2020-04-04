import { takeLatest, all } from 'redux-saga/effects';
import API from '../services/api';

import {AuthTypes} from '../actions/auth';
import { UserStoryTypes } from '../actions/userStory';
import { TagTypes } from '../actions/tag';

import {
  loginRequest
} from './auth';

import {
  getAllUserStoryRequest,
  createNewUserStoryRequest,
  updateUserStoryRequest
} from './userStory';

import {
  getAllFeaturesRequest,
  createNewFeatureRequest,
  updateFeatureRequest,
} from './featureRequest';

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

    // ------------------------- Feature Request Sagas
    takeLatest(UserStoryTypes.GET_ALL_FEATURES_REQUEST, getAllFeaturesRequest, api),
    takeLatest(UserStoryTypes.CREATE_NEW_FEATURE_REQUEST, createNewFeatureRequest, api),
    takeLatest(UserStoryTypes.UPDATE_FEATURE_REQUEST, updateFeatureRequest, api),

    // ------------------------- User Story Sagas
    takeLatest(UserStoryTypes.GET_TASKS_REQUEST, getAllUserStoryRequest, api),
    takeLatest(UserStoryTypes.CREATE_NEW_TASK_REQUEST, createNewUserStoryRequest, api),
    takeLatest(UserStoryTypes.UPDATE_TASK_REQUEST, updateUserStoryRequest, api),

    takeLatest(TagTypes.GET_ALL_TAGS_REQUEST, getAllTagsRequest, api),
    takeLatest(TagTypes.CREATE_NEW_TAG_REQUEST, createNewTagRequest, api),
  ])
}
