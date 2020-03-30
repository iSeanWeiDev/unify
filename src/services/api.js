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
  
  // auth
  const postLogin = payload => api.post('/auth/login', payload);
  const getUserStory = () => authMiddleWare(api).get('/user-stories');

  return {
    postLogin,
    getUserStory,
  }
}

export default {
  create
}