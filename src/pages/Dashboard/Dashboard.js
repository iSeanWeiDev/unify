import React from 'react';
import { withRouter } from 'react-router-dom';
import UserStory from './partials/UserStory';
import Example2 from './partials/Example2';
import Example3 from './partials/Example3';
import UserAdministration from './partials/UserAdministation';
import '../../styles/pages/dashboard/main.scss';

function Dashboard({
  match
}) {
  const tabStatus = match.params.tabID;
  console.log("tabStatus", tabStatus)
  const dashboardElement = () => {
    let element = <UserStory />;
    switch(tabStatus) {
      case 'user-stories': 
        element = <UserStory />
        break;
      case 'example2':
        element = <Example2 />
        break;
      case 'example3': 
        element = <Example3 />
        break;
      case 'admin-settings': 
        element = <UserAdministration />
        break;
      default:
        element = <UserStory />
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
