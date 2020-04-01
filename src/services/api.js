import apisauce from 'apisauce';
import {store} from '../reducers';
import config from '../config';


const authMiddleWare = (api) => {
  const appState = store.getState().app;
  const token = appState.data.token_type + ' ' +appState.data.access_token;
  api.setHeader('Authorization', token)
  return api;
}

const create = (baseURL = config.API_BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      // 50 second timeout...
    timeout: 50000,
  });
  
  // Auth
  const postLogin = payload => api.post('/auth/login', payload);

  // User stories.
  // Feature request
  const getAllFeatures = () => authMiddleWare(api).get('/feature-requests');
  const createNewFeature = payload => authMiddleWare(api).post('/feature-requests', payload);
  const updateFeature = payload => {
    const id = payload.id;
    delete payload.id;
    return authMiddleWare(api).put(`/feature-requests/${id}`, payload);
  }

  // Feature board
  const getTasks = () => authMiddleWare(api).get('/user-stories');
  const createNewTask = payload => authMiddleWare(api).post('/user-stories', payload);
  const updateTask = payload => {
    const id = payload.id;
    delete payload.id;
    return authMiddleWare(api).put(`/user-stories/${id}`, payload);
  }
  return {
    postLogin,
    getAllFeatures,
    createNewFeature,
    updateFeature,
    getTasks,
    createNewTask,
    updateTask,
  }
}

export default {
  create
}