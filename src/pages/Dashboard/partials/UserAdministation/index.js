import React, {useState} from 'react';
import {Nav} from 'react-bootstrap';
import Users from './Users';
import DisabledUsers from './DisabledUsers';
import RestoreUsers from './RestoreUsers';

import '../../../../styles/pages/dashboard/user-administration/main.scss';
const UserAdministration = () => {
  const [tab, setTab] = useState(0);

  const handleSelectTab = index => {
    setTab(index);
  }

  const tabContent = () => {
    let element = <Users />;
    switch(tab) {
      case 0: 
        element = <Users />
        break;
      case 1:
        element = <DisabledUsers />
        break;
      case 2: 
        element = <RestoreUsers />
        break;
      default:
        element = <Users />
        break;
    }

    return element;
  }

  return (
    <div className="bread-crumbs">
      <div className="bar">
        <span> 
          Home / Admin / User Management
        </span>
      </div>
      <div className="tabs">
      <Nav variant="tabs">
        <Nav.Item 
          className={tab === 0 ? "active" : ""}
          onClick={()=>handleSelectTab(0)}
        >
          Users
        </Nav.Item>
        <Nav.Item 
          className={tab === 1 ? "active" : ""}
          onClick={()=>handleSelectTab(1)}
        >
            Disabled Users
        </Nav.Item>
        <Nav.Item 
          className={tab === 2 ? "active" : ""}
          onClick={()=>handleSelectTab(2)}
        >
          Recovered Users
        </Nav.Item>
      </Nav>
      </div>
      <div className="tab-content">
        {tabContent()}
      </div>

    </div>
  )
}

export default UserAdministration;