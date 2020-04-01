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

  // Get task request
  getTasksRequest: null,
  getTasksSuccess: ['response'],
  getTasksFailure: null,

  // Create new task request.
  createNewTaskRequest: ['payload'],
  createNewTaskSuccess: ['response'],
  createNewTaskFailure: null,

  // Update task request
  updateTaskRequest: ['payload'],
  updateTaskSuccess: ['response'],
  updateTaskFailure: null,
})

export const UserStoryTypes = Types;
export default Creators;
