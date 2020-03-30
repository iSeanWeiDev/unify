import React, {useState} from 'react';
import {
  FormGroup, 
  Image, 
  Card, 
  Button
} from 'react-bootstrap';
import TaskComponent from './Task/Task';
import AddTaskModal from './Task/AddTaskModal';

function Panel ({title, tasks}) {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = (e, data) => {
    setModalShow(true)
  };

  let imageName = '';
  switch(title) {
    case 'backlog':
      imageName = 'line-back-log.png';
      break;
    case 'In Progress':
      imageName = 'line-in-progress.png';
      break;
    case 'Review':
      imageName = 'line-review.png';
      break;
    case 'Complete':
      imageName = 'line-complete.png';
      break;
    default:
      break;
  }

  return (
    <FormGroup className="pannel">
      <Card>
        <Image src={`/images/assets/${imageName}`} />
        <Card.Body>
          <Card.Title>
            <span className="title-span">
              {title}
            </span>
            <Image src="/images/assets/icon-pencil.png" />
            <span className="icon-span">  </span> 
          </Card.Title>
          {tasks.map(function (task, index) {
            return (
              <TaskComponent taskData={task} key={index}/>
            )
          })}
          <Card.Footer>
            <Button
              onClick={handleShow}  
              variant="white" 
              className="footer-button"
            >
              Add task
              <Image src="/images/assets/icon-btn-plus.png" />
            </Button>
            <AddTaskModal 
              show={modalShow}
              // data={taskData}
              onHide={() => setModalShow(false)}
            />
          </Card.Footer>
        </Card.Body>
      </Card>
    </FormGroup> 
  )
}

export default Panel;