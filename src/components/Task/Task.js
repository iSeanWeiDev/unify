import React, {useState} from 'react';
import '../../styles/components/task.scss';
import TaskModal from '../Modal/TaskModal';
import { 
  Row, 
  Col, 
  Image, 
  FormGroup, 
} from 'react-bootstrap';

function Priority(props) {
  const priority = props.priority;
  let strPriority = "";
  let sectionStyle = "";
  switch(priority) {
    case 'low':
      strPriority = "Low Priority"
      sectionStyle = "low-priority";
      break;
    case 'medium':
      strPriority = "Med Priority";
      sectionStyle = "med-priority";
      break;
    case 'high':
      strPriority = "High Priority";
      sectionStyle = "high-priority";
      break;
    default:
      strPriority = "";
      sectionStyle="";
      break;
  }

  return (
    <div className="priority-section">
      <div className={sectionStyle}>
        <span>
          { strPriority }
        </span>  
      </div>
    </div>
  )
}

function Description(props) {
  const description = props.description;
  return (
    <div className="description-section">
      <span>
        {description}
      </span>
    </div>
  )
}

function TaskFooterSection({commentCount, tags, users}) {
  return (
    <div className="task-footer">
      <Row>
        <Col md={6}>
          <FormGroup className="left-section">
            <Image src="/images/assets/icon-message.png" />
            <span>{ commentCount }</span>
            <Image src="/images/assets/icon-tag.png" />
            <span>0</span>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup  className="right-section">
            <Image src="/images/assets/icon-add-user.png" />
            <Image src="/images/assets/icon-user.png" />
          </FormGroup>
        </Col>
      </Row>

    </div>
  )
}

function Task ({taskData}) {
  const [modalShow, setModalShow] = useState(false);
  
  const handleShow = (e, data) => {
    setModalShow(true)
  };

  return (
    <>
      <div 
        className="task"
        onClick={(e) => handleShow(e, taskData)}  
      >
        <FormGroup>
          <Priority priority={taskData.priority} />
          <Description description={taskData.name} />
          <TaskFooterSection 
            commentCount={taskData.comment_count}
            tags={taskData.tags}
            users={taskData.assignee_user}
          />
        </FormGroup>
      </div>

      <TaskModal
        show={modalShow}
        task={taskData}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Task;
