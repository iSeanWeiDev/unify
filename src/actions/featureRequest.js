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

  // Update featrure request
  updateFeatureRequest: ['payload'],
  updateFeatureSuccess: ['response'],
  updateFeatureFailure: null,
});

export const FeatureRequestTypes = Types;
export default Creators;
