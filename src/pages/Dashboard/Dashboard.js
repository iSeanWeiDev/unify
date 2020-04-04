import React from 'react';
import { withRouter } from 'react-router-dom';
import StoryBoard from './partials/StoryBoard';
import Example2 from './partials/Example2';
import Example3 from './partials/Example3';
import UserAdministration from './partials/UserAdministation';
import '../../styles/pages/dashboard/main.scss';

function Dashboard({
  match
}) {
  const tabStatus = match.params.tabID;
  const dashboardElement = () => {
    let element = <StoryBoard />;
    switch(tabStatus) {
      case 'story-board': 
        element = <StoryBoard />
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
        element = <StoryBoard />
        break;
    }
    return element;
  }

  return (
    <div className="main">
      {dashboardElement()}
    </div>
  )
}

export default withRouter(Dashboard);
