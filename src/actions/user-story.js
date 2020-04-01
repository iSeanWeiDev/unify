import {createActions} from 'reduxsauce';

const { Types, Creators } = createActions({
  // Get all feature requests
  getAllFeaturesRequest: null,
  getAllFeaturesSuccess: ['response'],
  getAllFeaturesFailure: null,

  // Create new feature request
  createNewFeatureRequest: ['payload'],
  createNewFeatureSuccess: ['response'],
  createNewFeatureFailure: null,

  // Get user stories
  getUserStoryRequest: null,
  getUserStorySuccess: ['response'],
  getUserStoryFailure: null,
})

export const UserStoryTypes = Types;
export default Creators;
