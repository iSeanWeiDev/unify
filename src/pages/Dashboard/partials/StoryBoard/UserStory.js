import React, {useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { equals } from 'ramda';
import UserStoryPanel from '../../../../components/Panels/UserStoryPanel';
import UserStoryActions from '../../../../actions/userStory';
import LoadingSpinner from '../../../../components/LoadingSpinner';

import '../../../../styles/pages/dashboard/story-board/user-story.scss';

const UserStory = ({
  getAllUserStories,
  userStoryData,
  isDone,
}) => {
  useEffect(() => {
    getAllUserStories();
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
    if (isDone && userStoryData.length > 0) {
      userStoryData.forEach(element => {
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
  userStoryData: state.userStory.data,
  isDone: equals(state.userStory.getStatus, 'done'),
})

const mapDispatchToProps = dispatch => ({
  getAllUserStories: () => dispatch(UserStoryActions.getAllUserStoryRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserStory);