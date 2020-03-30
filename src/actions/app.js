import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  appAuthenticated: ['response'],
  getAccessToken: null,
  clearRequest: null,
})

export const AppTypes = Types
export default Creators
