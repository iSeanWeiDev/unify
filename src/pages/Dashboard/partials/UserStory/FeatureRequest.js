import React, {useState, useEffect} from 'react';
import {Row, Button} from 'react-bootstrap';
import {Plus} from 'react-bootstrap-icons';
import FeatureRequestPanel from '../../../../components/Panels/FeatureRequestPanel'
import AddNewRequestModal from '../../../../components/Modal/AddNewRequestModal';
import '../../../../styles/pages/dashboard/user-stories/feature-request.scss';
import featureRequestData from '../../../../constants/featureRequest.json';

function FeatureRequest() {
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
    featureRequestData.data.forEach(element => {
      switch (element.status) {
        case 'inbox':
          inbox.push(element);
          break;
        case 'up-next': 
          upNext.push(element);
          break;
        case  'in-review':
          inReview.push(element);
          break;
        case 'moved-to-feature-board':
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
  }, [])
  

  return (
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
  )
}

export default FeatureRequest;