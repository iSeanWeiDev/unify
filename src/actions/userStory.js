import {createActions} from 'reduxsauce';

const { Types, Creators } = createActions({  
  // Get all user story request
  getAllUserStoryRequest: null,
  getAllUserStorySuccess: ['response'],
  getAllUserStoryFailure: null,

  // Create new task request.
  createNewUserStoryRequest: ['payload'],
  createNewUserStorySuccess: ['response'],
  createNewUserStoryFailure: null,

  // Update task request
  updateUserStoryRequest: ['payload'],
  updateUserStorySuccess: ['response'],
  updateUserStoryFailure: null,
})

export const UserStoryTypes = Types;
export default Creators;
