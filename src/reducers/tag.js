import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { TagTypes } from '../actions/tag';

const initialState = Immutable({
  getStatus: "",
  saveStatus: "",
  updateStatus: "",
  data: "",
});

// Get All Feature Request.
const getAllTagsRequest = (state, action) => state.merge({...state, getStatus: 'pending'});
const getAllTagsSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    getStatus: 'done',
    data: data,
  })
}
const getAllTagsFailure = (state, action) => state.merge({...state, getStatus: 'error'});

const saveTagRequest = (state, action) => state.merge({...state, saveStatus: 'pending'});
const saveTagSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    saveStatus: 'done',
    data: state.data.concat(data)
  });
}
const saveTagFailure = (state, action) => state.merge({...state, saveStatus: 'error'});

export const reducer = createReducer(initialState, {
  [TagTypes.GET_ALL_TAGS_REQUEST]: getAllTagsRequest,
  [TagTypes.GET_ALL_TAGS_SUCCESS]: getAllTagsSuccess,
  [TagTypes.GET_ALL_TAGS_FAILURE]: getAllTagsFailure,

  [TagTypes.CREATE_NEW_TAG_REQUEST]: saveTagRequest,
  [TagTypes.CREATE_NEW_TAG_SUCCESS]: saveTagSuccess,
  [TagTypes.CREATE_NEW_TAG_FAILURE]: saveTagFailure
});