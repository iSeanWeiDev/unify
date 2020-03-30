import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AppLayout from '../Layouts/AppLayout';

function PrivateRoute ({
  component: Component,
  appData,
  ...rest 
}) {
  const checkIfLoggedIn = () => {
    if (appData.data.access_token) {
      if (appData.authenticated) {
        // fetchCurrentUserProfile();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return (
    <Route 
      {...rest} 
      render={(props) => (
        checkIfLoggedIn ? <AppLayout><Component {...props} /></AppLayout> : <Redirect to='/login' /> 
      )} 
    />
  )
}

const mapStateToProps = state => ({
  appData: state.app,
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
