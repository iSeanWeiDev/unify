import React, {useState} from 'react';
import {
  FormGroup, 
  Image, 
  Card, 
  Button
} from 'react-bootstrap';
import TaskComponent from '../Task/Task';
import AddTaskModal from '../Modal/AddTaskModal';

function Panel ({title, tasks}) {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = (e, data) => {
    setModalShow(true)
  };

  let imageName = '';
  let panelName= '';
  switch(title) {
    case 'backlog':
      imageName = 'line-back-log.png';
      panelName = 'backlog';
      break;
    case 'In Progress':
      imageName = 'line-in-progress.png';
      panelName = 'in-progress';
      break;
    case 'Review':
      imageName = 'line-review.png';
      panelName = 'review';
      break;
    case 'Complete':
      imageName = 'line-complete.png';
      panelName = 'complete';
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
              panel={panelName}
              onHide={() => setModalShow(false)}
            />
          </Card.Footer>
        </Card.Body>
      </Card>
    </FormGroup> 
  )
}

export default Panel;