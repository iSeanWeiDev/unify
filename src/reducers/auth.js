import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AuthTypes } from '../actions/auth';

const initialState = Immutable({
  status: "",
  data: "",
});

// Define the login reducers
const loginRequest = (state, action) => 
  state.merge({
    ...state,
    status: 'pending',
  });


const loginSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data,
  })
}

const loginFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data,
  })
}

export const reducer = createReducer(initialState, {
  [AuthTypes.LOGIN_REQUEST]: loginRequest,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
});