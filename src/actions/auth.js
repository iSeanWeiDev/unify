import {createActions} from 'reduxsauce';

const { Types, Creators } = createActions({
  // Login
  loginRequest: ['payload'],
  loginSuccess: ['response'],
  loginFailure: ['response'],
})

export const AuthTypes = Types;
export default Creators;
