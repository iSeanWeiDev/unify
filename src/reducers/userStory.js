import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserStoryTypes } from '../actions/userStory';

const initialState = Immutable({
  getStatus: "",
  saveStatus: "",
  updateStatus: "",
  data: "",
});

// Get task request.
const getAllUserStoryRequest = (state, action) => state.merge({...state, getStatus: 'pending'});
const getAllUserStorySuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    getStatus: 'done',
    data: data,
  })
}
const getAllUserStoryFailure = (state, action) => state.merge({...state, getStatus: 'error'});

// Create new task reqest.
const createNewUserStoryRequest = (state, action) => state.merge({...state, saveStatus: 'pending'});
const createNewUserStorySuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    saveStatus: 'done',
    data: state.data.concat(data),
  })
}
const createNewUserStoryFailure = (state, action) => state.merge({...state, saveStatus: 'error'});

// Update task request
const updateUserStoryRequest = (state, action) => state.merge({...state, updateStatus: 'pending'});
const updateUserStorySuccess = (state, action) => {
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
const updateUserStoryFailure = (state, action) => state.merge({...state, updateStatus: 'error'});

export const reducer = createReducer(initialState, {
  // Get user story request.
  [UserStoryTypes.GET_ALL_USER_STORY_REQUEST]: getAllUserStoryRequest,
  [UserStoryTypes.GET_ALL_USER_STORY_SUCCESS]: getAllUserStorySuccess,
  [UserStoryTypes.GET_ALL_USER_STORY_FAILURE]: getAllUserStoryFailure,

  // Create new user story request.
  [UserStoryTypes.CREATE_NEW_USER_STORY_REQUEST]: createNewUserStoryRequest,
  [UserStoryTypes.CREATE_NEW_USER_STORY_SUCCESS]: createNewUserStorySuccess,
  [UserStoryTypes.CREATE_NEW_USER_STORY_FAILURE]: createNewUserStoryFailure,

  // Update user story request.
  [UserStoryTypes.UPDATE_USER_STORY_REQUEST]: updateUserStoryRequest,
  [UserStoryTypes.UPDATE_USER_STORY_SUCCESS]: updateUserStorySuccess,
  [UserStoryTypes.UPDATE_USER_STORY_FAILURE]: updateUserStoryFailure,
});