import React, {useState, useEffect} from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import {FormGroup, Dropdown, DropdownButton} from 'react-bootstrap';
import {ChevronDown} from 'react-bootstrap-icons';

import FeatureBoard from './FeatureBoard';
import FeatureRequest from './FeatureRequest';
import '../../../../styles/pages/dashboard/user-stories/main.scss';

function UserStory ({
  match
}) {
  const titles = [
    {label: "Feature Request", value: "feature-request"},
    {label: "Feature Board", value: "feature-board"}
  ];
  const featureID = match.params.featureID;

  const history = useHistory();

  const handleDropdownChange = title => {
    history.push(`/dashboard/user-stories/${title.value}`);
  };

  function getTitle() {
    if (featureID === 'feature-request') return 'Feature Request';
    if (featureID === 'feature-board') return 'Feature Board';
    return 'Feature Request';
  }

  return (
    <div className="user-stories">
      <div className="title">
        <FormGroup>
          <span> {getTitle()} </span>
          <DropdownButton 
            alignRight
            className="btn-dropdown"
            title={<ChevronDown />}
          >
            {titles.map(title => (
                <Dropdown.Item 
                  onClick={() => handleDropdownChange(title)}
                  key={title.value}
                >
                  {title.label}
                </Dropdown.Item>
            ))}
          </DropdownButton>
        </FormGroup>
      </div>
      <div className="content">
        {featureID === "feature-board" ? (
          <FeatureBoard />
        ) : (
          <FeatureRequest />
        )}
      </div>
    </div>
  )
}

export default withRouter(UserStory);
