import {createActions} from 'reduxsauce';

const { Types, Creators } = createActions({
  // Get user stories
  getUserStoryRequest: null,
  getUserStorySuccess: ['response'],
  getUserStoryFailure: null,

  // Update user story by id
  updateUserStoryRequest: ['payload'],
  updateUserStorySuccess: ['response'],
  updateUserStoryFailure: null,
})

export const UserStoryTypes = Types;
export default Creators;
