import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserStoryTypes } from '../actions/user-story';

const initialState = Immutable({
  status: "",
  data: "",
});

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

const updateUserStoryRequest = (state, action) => {
  return state.merge({
    ...state,
    status: 'pending',
  });
}

const updateUserStorySuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data,
  })
}

const updateUserStoryFailure = (state, action) => {
  return state.merge({
    ...state,
    status: 'error',
  })
}

export const reducer = createReducer(initialState, {
  // Get user stories
  [UserStoryTypes.GET_USER_STORY_REQUEST]: getUserStoryRequest,
  [UserStoryTypes.GET_USER_STORY_SUCCESS]: getUserStorySuccess,
  [UserStoryTypes.GET_USER_STORY_FAILURE]: getUserStoryFailure,
  // Update user story
  [UserStoryTypes.UPDATE_USER_STORY_REQUEST]: updateUserStoryRequest,
  [UserStoryTypes.UPDATE_USER_STORY_SUCCESS]: updateUserStorySuccess,
  [UserStoryTypes.UPDATE_USER_STORY_FAILURE]: updateUserStoryFailure,
});