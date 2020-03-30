import React from 'react';
import { withRouter } from 'react-router-dom';
import FeatureBoard from './FeatureBoard';
import Example2 from './Example2';
import Example3 from './Example3';
import AdminSettings from './settings';
import '../../styles/pages/dashboard/main.scss';

function Dashboard({
  match
}) {
  const tabStatus = match.params.tabID;
  const dashboardElement = () => {
    let element = <FeatureBoard />;
    switch(tabStatus) {
      case 'feature-board': 
        element = <FeatureBoard />
        break;
      case 'example2':
        element = <Example2 />
        break;
      case 'example3': 
        element = <Example3 />
        break;
      case 'admin-settings': 
        element = <AdminSettings />
        break;
      default:
        element = <FeatureBoard />
        break;
    }
    return element;
  }

  return (
    <div className="main">
      Dashboard
      {dashboardElement()}
    </div>
  )
}

export default withRouter(Dashboard);
