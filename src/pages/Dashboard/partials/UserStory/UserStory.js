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
    {label: "Feature Request", value: "feature-request"},
    {label: "Feature Board", value: "feature-board"}
  ];

  const history = useHistory();
  const [titleName, setTitleName] = useState()
  const [uri, setUri] = useState(match.params.featureID)

  const handleDropdownChange = title => {
    setTitleName(title.label);
    setUri(title.value);
  };

  useEffect(() => {
    switch(uri) {
      case 'feature-request':
        setTitleName('Feature Request');
        history.push('/dashboard/user-stories/feature-request')
        break;
      case 'feature-board':
        setTitleName('Feature Board');
        history.push('/dashboard/user-stories/feature-board')
        break;
      default:
        setTitleName('Feature Request');
        history.push('/dashboard/user-stories/feature-request')
        break;
    }
  }, [uri]);

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
        {uri === "feature-request" ? (
          <FeatureRequest />
        ) : (
          <FeatureBoard />
        )}
      </div>
    </div>
  )
}

export default withRouter(UserStory);
