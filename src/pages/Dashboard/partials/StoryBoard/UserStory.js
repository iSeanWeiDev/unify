import React, {useState, useEffect} from 'react';
import {FormGroup, Row} from 'react-bootstrap';
import {ChevronDown} from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { equals, isEmpty, isNil } from 'ramda';
import UserStoryPanel from '../../../../components/Panels/UserStoryPanel';
import UserStoryActions from '../../../../actions/userStory';
import LoadingSpinner from '../../../../components/LoadingSpinner';

import '../../../../styles/pages/dashboard/story-board/user-story.scss';

const UserStory = ({
  getTasks,
  boardData,
  isDone,
}) => {
  useEffect(() => {
    getTasks();
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
    if (isDone && boardData.length > 0) {
      boardData.forEach(element => {
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
  
  }, [boardData])

  return (
    <>
      {!isDone ? ( 
        <LoadingSpinner /> 
      ) : (
        <div className="feature-board">
          <Row>
            <UserStoryPanel 
              title="backlog"
              tasks={backlogData}
            />
            <UserStoryPanel 
              title="In Progress"
              tasks={inprogressData}
            />
            <UserStoryPanel 
              title="Review"
              tasks={reviewData}
            />
            <UserStoryPanel 
              title="Complete"
              tasks={completeData}
            />
          </Row>
        </div>
      ) }
     </>
  );
}

const mapStateToProps = state => ({
  boardData: state.userStory.data,
  isDone: equals(state.userStory.getStatus, 'done'),
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(UserStoryActions.getTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserStory);