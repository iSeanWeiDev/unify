import React, {useState, useEffect} from 'react';
import {FormGroup, Row} from 'react-bootstrap';
import {ChevronDown} from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { equals, isEmpty, isNil } from 'ramda';
import Panel from '../../components/Panel';
import UserStoryActions from '../../actions/user-story';
import LoadingSpinner from '../../components/LoadingSpinner';

import '../../styles/pages/dashboard/feature-board.scss';

const FeatureBoard = ({
  getUserStoryRequest,
  userStoryData,
  isDone,
}) => {
  useEffect(() => {
    getUserStoryRequest();
  }, []);

  let backLog = [];
  let inProgress = [];
  let review = [];
  let complete = [];

  const [backlogData, setBacklogData] = useState([]);
  const [inprogressData, setInprogressData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    if (isDone && userStoryData.data.length > 0 && userStoryData.data !== "No tenant connection") {
      console.log(userStoryData.data)
      userStoryData.data.forEach(element => {
        switch (element.status) {
          case 'backlog':
            backLog.push(element);
            break;
          case 'in-progress': 
            inProgress.push(element);
            break;
          case  'review':
            review.push(element);
            break;
          case 'complete':
            complete.push(element);
            break;
          default:
            break;
        }
      });
      
      setBacklogData(backLog);
      setInprogressData(inProgress);
      setReviewData(review);
      setCompleteData(complete);
    }
  
  }, [userStoryData])

  return (
    <>
      {!isDone ? ( 
        <LoadingSpinner /> 
      ) : (
        <div className="feature-board">
          <div className="title">
          <FormGroup>
            <span>Feature Board</span>
            <button className="btn-dropdown">
              <ChevronDown />
            </button>
          </FormGroup>
        </div>
        <div className="content">
          <Row>
            <Panel 
              title="backlog"
              tasks={backlogData}
            />
            <Panel 
              title="In Progress"
              tasks={inprogressData}
            />
            <Panel 
              title="Review"
              tasks={reviewData}
            />
            <Panel 
              title="Complete"
              tasks={completeData}
            />
          </Row>
        </div>
      </div> 
      ) }
     </>
  );
}

const mapStateToProps = state => ({
  userStoryData: state.userStory.data,
  isDone: equals(state.userStory.status, 'done'),
})

const mapDispatchToProps = dispatch => ({
  getUserStoryRequest: () => dispatch(UserStoryActions.getUserStoryRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureBoard);