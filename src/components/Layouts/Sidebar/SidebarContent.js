import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, Image} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../../../styles/components/sidebar.scss'

function SidebarContent({
  match
}) {
  const [tab, setTab] = useState(0);
  const handleSelectTab = index => {
    setTab(index);
  }
  const tabStatus = match.params.tabID;
  return (
    <div className="sidebarWrapper">
      <Link to="/dashboard/feature-board">
        <FormGroup className="tabs">
          <div 
            className={tabStatus === "feature-board" || tabStatus === undefined ? "text-center items active" : "text-center items"}
            onClick={()=>handleSelectTab(0)}>
            <Image 
              src={`/images/assets/${tabStatus === "feature-board" || tabStatus === undefined ? 'icon-selected-home.png' : 'icon-home.png'}`}
            />
          </div>
        </FormGroup>
      </Link>
      
      <Link to="/dashboard/example2">
        <FormGroup className="tabs">
          <div 
            className={tabStatus === 'example2' ? "text-center items active" : "text-center items"}
            onClick={()=>handleSelectTab(1)}>
            <Image 
              src={`/images/assets/${tabStatus === "example2" ? 'icon-selected-report.png' : 'icon-report.png'}`}
            />
          </div>
        </FormGroup>
      </Link>
      
      <Link to="/dashboard/example3" >
        <FormGroup className="tabs">
          <div 
            className={tabStatus === 'example3' ? "text-center items active" : "text-center items"}
            onClick={()=>handleSelectTab(2)}>
             <Image 
              src={`/images/assets/${tabStatus === "example3" ? 'icon-selected-save.png' : 'icon-save.png'}`}
            />
          </div>    
        </FormGroup>
      </Link>
     
      <Link to="/dashboard/admin-settings" >
        <FormGroup className="tabs">
          <div 
            className={tabStatus === 'admin-settings' ? "text-center items active" : "text-center items"}
            onClick={()=>handleSelectTab(3)}>
            <Image 
              src={`/images/assets/${tabStatus === "admin-settings" ? 'icon-selected-user-setting.png' : 'icon-user-setting.png'}`}
            />
          </div>
        </FormGroup>
      </Link>
    </div>
  )
}

export default withRouter(SidebarContent);