import React, {useState, useEffect} from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import {FormGroup, Dropdown, DropdownButton} from 'react-bootstrap';
import {ChevronDown} from 'react-bootstrap-icons';

import UserStory from './UserStory';
import FeatureRequest from './FeatureRequest';
import '../../../../styles/pages/dashboard/story-board/main.scss';

function StoryBoard ({
  match
}) {
  const titles = [
    {label: "Feature Request", value: "feature-request"},
    {label: "Feature Board", value: "user-stories"}
  ];
  const featureID = match.params.featureID;

  const history = useHistory();

  const handleDropdownChange = title => {
    history.push(`/dashboard/story-board/${title.value}`);
  };

  function getTitle() {
    if (featureID === 'feature-request') return 'Feature Request';
    if (featureID === 'user-stories') return 'Feature Board';
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
        {featureID === "user-stories" ? (
          <UserStory />
        ) : (
          <FeatureRequest />
        )}
      </div>
    </div>
  )
}

export default withRouter(StoryBoard);
