import React, {useState, useEffect} from 'react';
import {Row, Button} from 'react-bootstrap';
import {Plus} from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { equals, isEmpty, isNil } from 'ramda';
import FeatureRequestPanel from '../../../../components/Panels/FeatureRequestPanel'
import AddNewRequestModal from '../../../../components/Modal/AddNewRequestModal';
import UserStoryActions from '../../../../actions/user-story';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import '../../../../styles/pages/dashboard/user-stories/feature-request.scss';

function FeatureRequest({
  getAllFeatures,
  isDone,
  featureData,
}) {
  // fetch all features.
  useEffect(() => {
    getAllFeatures();
  }, []);

  let inbox = [];
  let upNext = [];
  let inReview = [];
  let movedToFeatureBoard = [];
  
  const [inboxData, setInboxData] = useState([]);
  const [upNextData, setUpNextData] = useState([]);
  const [inReviewData, setInReviewData] = useState([]);
  const [movedToFeatureBoardData, setMovedToFeatureBoardData] = useState([]);
  const [addNewRequestModalShow, setAddNewRequestModalShow] = useState(false);
  const handleAddNewRequestModalShow = (e, data) => {
    setAddNewRequestModalShow(true)
  };

  useEffect(() => {
    if (isDone && featureData.length > 0) {
      featureData.forEach(element => {
        switch (element.status) {
          case 'inbox':
            inbox.push(element);
            break;
          case 'next': 
            upNext.push(element);
            break;
          case 'review':
            inReview.push(element);
            break;
          case 'board':
            movedToFeatureBoard.push(element);
            break;
          default:
            break;
        }
      });
        
      setInboxData(inbox);
      setUpNextData(upNext);
      setInReviewData(inReview);
      setMovedToFeatureBoardData(movedToFeatureBoard);
    }
  }, [featureData]);  

  return (
    <>
      {!isDone ? (
        <LoadingSpinner />
      ) : (
        <div className="feature-request">
          <Row>
            <FeatureRequestPanel
              title='Inbox'
              requests={inboxData}
            />
            <FeatureRequestPanel
              title='Up Next'
              requests={upNextData}
            />
            <FeatureRequestPanel
              title='In Review'
              requests={inReviewData}
            />
            <FeatureRequestPanel
              title='Moved to Feature Board'
              requests={movedToFeatureBoardData}
            />
          </Row>
          <div className="add-new-request">
            <Button
              onClick={handleAddNewRequestModalShow}>
              <Plus />
            </Button>
          </div>
          <AddNewRequestModal
            show={addNewRequestModalShow}
            // data={taskData}
            onHide={() => setAddNewRequestModalShow(false)}
          />
        </div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  featureData: state.userStory.data,
  isDone: equals(state.userStory.getStatus, 'done'),
})

const mapDispatchToProps = dispatch => ({
  getAllFeatures: () => dispatch(UserStoryActions.getAllFeaturesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureRequest);