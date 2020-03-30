import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState, rootReducer, history) {
  let ENV = process.env.NODE_ENV
  let composeEnhancers = compose

  if (ENV !== 'production') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  const store = createStore(
    rootReducer, // root reducer with router state
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
