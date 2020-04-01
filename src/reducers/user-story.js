import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserStoryTypes } from '../actions/user-story';

const initialState = Immutable({
  getStatus: "",
  saveStatus: "",
  updateStatus: "",
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
const createNewFeatureFailure = (state, action) => state.merge({...state, updateStatus: 'error'});

// Update feature request
const updateFeatureRequest = (state, action) => state.merge({...state, updateStatus: 'pending'});
const updateFeatureSuccess = (state, action) => {
  const data = action.response;
  let newStateData = [];
  for(var obj of state.data) {
    if(obj.id === data.id) {
      newStateData.push(data);
    } else {
      newStateData.push(obj);
    }
  }
  return state.merge({...state, updateStatus: 'done', data: newStateData})
}
const updateFeatureFailure = (state, action) => state.merge({...state, updateStatus: 'error'});

// Get task request.
const getTasksRequest = (state, action) => {
  return state.merge({
    ...state,
    getStatus: 'pending',
  });
}

const getTasksSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    getStatus: 'done',
    data: data,
  })
}

const getTasksFailure = (state, action) => {
  return state.merge({
    ...state,
    getStatus: 'error',
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

  // Update feature request.
  [UserStoryTypes.UPDATE_FEATURE_REQUEST]: updateFeatureRequest,
  [UserStoryTypes.UPDATE_FEATURE_SUCCESS]: updateFeatureSuccess,
  [UserStoryTypes.UPDATE_FEATURE_FAILURE]: updateFeatureFailure,

  // Get Tasks request.
  [UserStoryTypes.GET_TASKS_REQUEST]: getTasksRequest,
  [UserStoryTypes.GET_TASKS_SUCCESS]: getTasksSuccess,
  [UserStoryTypes.GET_TASKS_FAILURE]: getTasksFailure,
});