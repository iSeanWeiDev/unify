import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from './reducers';
import { Provider } from 'react-redux';
import './styles/theme.scss';
import './styles/main.scss';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import BasicLayout from './components/Layouts/BasicLayout';
import AppLayout from './components/Layouts/AppLayout';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={Home} layout={BasicLayout} />
          <PublicRoute exact path="/about" component={About} layout={BasicLayout} />
          <PublicRoute exact path="/login" component={Login} layout={BasicLayout} />
          <PrivateRoute exact path="/dashboard/:tabID?" component={Dashboard} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

export default App;