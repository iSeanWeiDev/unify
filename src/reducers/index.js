import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import configureStore from '../configureStore'
import {createBrowserHistory} from 'history';
import immutablePersistenceTransform from '../services/transform'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app'],
  transforms: [immutablePersistenceTransform],
}

const history = createBrowserHistory();
/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  app: require('./app').reducer,
  auth: require('./auth').reducer,
  userStory: require('./user-story').reducer,
})
const persistedReducer = persistReducer(persistConfig, reducers)
const initialState = {}
const store = configureStore(initialState, persistedReducer, history)
const persistor = persistStore(store)

export { store, persistor, history }
