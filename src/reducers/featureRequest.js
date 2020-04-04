import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { FeatureRequestTypes } from '../actions/featureRequest';

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
const createNewFeatureFailure = (state, action) => state.merge({...state, saveStatus: 'error'});

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

export const reducer = createReducer(initialState, {

  // Get all feature request.
  [FeatureRequestTypes.GET_ALL_FEATURES_REQUEST]: getAllFeaturesRequest,
  [FeatureRequestTypes.GET_ALL_FEATURES_SUCCESS]: getAllFeaturesSuccess,
  [FeatureRequestTypes.GET_ALL_FEATURES_FAILURE]: getAllFeaturesFailure,

  // Create new feature request.
  [FeatureRequestTypes.CREATE_NEW_FEATURE_REQUEST]: createNewFeatureRequest,
  [FeatureRequestTypes.CREATE_NEW_FEATURE_SUCCESS]: createNewFeatureSuccess,
  [FeatureRequestTypes.CREATE_NEW_FEATURE_FAILURE]: createNewFeatureFailure,

  // Update feature request.
  [FeatureRequestTypes.UPDATE_FEATURE_REQUEST]: updateFeatureRequest,
  [FeatureRequestTypes.UPDATE_FEATURE_SUCCESS]: updateFeatureSuccess,
  [FeatureRequestTypes.UPDATE_FEATURE_FAILURE]: updateFeatureFailure,
});