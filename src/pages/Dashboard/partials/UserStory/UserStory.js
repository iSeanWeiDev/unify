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
  let titles = [
    {label: "Feature Request", value: 0},
    {label: "Feature Board", value: 1}
  ];

  const history = useHistory();
  const [titleName, setTitleName] = useState('Feature Request')

  const handleDropdownChange = label => {
    setTitleName(label);
  };

  useEffect(() => {
    titleName === "Feature Request" ? history.push('/dashboard/user-stories/feature-request') : history.push('/dashboard/user-stories/feature-board') 
  }, [titleName])
  return (
    <div className="user-stories">
      <div className="title">
        <FormGroup>
          <span> {titleName} </span>
          <DropdownButton 
            alignRight
            className="btn-dropdown"
            title={<ChevronDown />}
          >
            {titles.map(title => (
                <Dropdown.Item 
                  onClick={() => handleDropdownChange(title.label)}
                  key={title.value}
                >
                  {title.label}
                </Dropdown.Item>
            ))}
          </DropdownButton>
        </FormGroup>
      </div>
      <div className="content">
        {match.params.featureID === "feature-request" ? (
          <FeatureRequest />
        ) : (
          <FeatureBoard />
        )}
      </div>
    </div>
  )
}

export default withRouter(UserStory);
