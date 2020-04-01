import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserStoryTypes } from '../actions/user-story';

const initialState = Immutable({
  getStatus: "",
  saveStatus: "",
  data: "",
});

// Get All Feature Request.

const getAllFeaturesRequest = (state, action) => state.merge({...state, getStatus: 'pending'});
const getAllFeaturesSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    getStatus: 'done',
    data: data,
  })
}
const getAllFeaturesFailure = (state, action) => state.merge({...state, getStatus: 'error'});

// Create new feature request.
const createNewFeatureRequest = (state, action) => state.merge({...state, saveStatus: 'pending'});
const createNewFeatureSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    saveStatus: 'done',
    data: state.data.concat(data),
  })
}
const createNewFeatureFailure = (state, action) => state.merge({...state, saveStatus: 'error'});

//
const getUserStoryRequest = (state, action) => {
  return state.merge({
    ...state,
    status: 'pending',
  });
}

const getUserStorySuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data,
  })
}

const getUserStoryFailure = (state, action) => {
  return state.merge({
    ...state,
    status: 'error',
  })
}

export const reducer = createReducer(initialState, {
  // Get all feature request.
  [UserStoryTypes.GET_ALL_FEATURES_REQUEST]: getAllFeaturesRequest,
  [UserStoryTypes.GET_ALL_FEATURES_SUCCESS]: getAllFeaturesSuccess,
  [UserStoryTypes.GET_ALL_FEATURES_FAILURE]: getAllFeaturesFailure,

  // Create new feature request.
  [UserStoryTypes.CREATE_NEW_FEATURE_REQUEST]: createNewFeatureRequest,
  [UserStoryTypes.CREATE_NEW_FEATURE_SUCCESS]: createNewFeatureSuccess,
  [UserStoryTypes.CREATE_NEW_FEATURE_FAILURE]: createNewFeatureFailure,

  // Get user stories
  [UserStoryTypes.GET_USER_STORY_REQUEST]: getUserStoryRequest,
  [UserStoryTypes.GET_USER_STORY_SUCCESS]: getUserStorySuccess,
  [UserStoryTypes.GET_USER_STORY_FAILURE]: getUserStoryFailure,
});