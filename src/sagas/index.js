import { takeLatest, all } from 'redux-saga/effects';
import API from '../services/api';

import {AuthTypes} from '../actions/auth';
import { UserStoryTypes } from '../actions/user-story';

import {
  loginRequest
} from './auth';

import {
  getUserStoryRequest,
} from './user-story'

const api = API.create();

export default function* root() {
  yield all([
    // ------------------------- App Sagas
    
    // ------------------------- Authentication Sagas
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest, api),

    // ------------------------- User Story Sagas
    takeLatest(UserStoryTypes.GET_USER_STORY_REQUEST, getUserStoryRequest, api)
  ])
}
