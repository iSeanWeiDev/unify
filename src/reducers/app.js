import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AppTypes } from '../actions/app'

const initialState = Immutable({
  status: "",
  data: "",
  authenticated: false,
})

const appAuthenticated = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state, 
    data: data,
    authenticated: true
  });
};
// clear all reqest
const clearRequest = (state, action) => state.merge({ ...state, ...initialState })

export const reducer = createReducer(initialState, {
  [AppTypes.APP_AUTHENTICATED]: appAuthenticated,
  [AppTypes.CLEAR_REQUEST]: clearRequest,
})
