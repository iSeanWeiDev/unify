import React, {useState} from 'react';
import {Row,Col,Modal,Button,Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import UserStoryActions from '../../actions/user-story';
import TagSelect  from '../Form/TagSelect';
import '../../styles/components/modal.scss';

function EditTaskModal({show, panel, onHide, createNewTask }) {
  const priorityList = [
    {value: 'low', display: 'Low Priority'},
    {value: 'medium', display: 'Medium Priority'},
    {value: 'high', display: 'High Priority'},
  ];

  const statusList = [
    {value: 'backlog', display: 'Backlog'},
    {value: 'in-progress', display: 'In Progreses'},
    {value: 'review', display: 'Review'},
    {value: 'complete', display: 'Complete'},
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState(panel);
  const [tagData, setTagData] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleTagsChanges = (e) => setTagData(e);
  const handleCheckBox = (e) => setChecked(e.target.checked);

  const handleCreateTask = (e) => {
    if (checked) {
      let selectedTags = tagData.reduce((accum, v) => {
        accum.push(v.value);
        return accum;
      }, []);

      const payload = {name, description, status, priority, tags: selectedTags}
      payload.project_id = 1;
      payload.assignee_user_id = 1;
      
      createNewTask(payload);
      onHide();
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Add User Story</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input task title.." 
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What is your request?</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3"
              value={description}
              onChange={handleDescriptionChange} 
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Status</Form.Label>
            <Form.Control 
              onChange={handleStatusChange}
              value={status}
              as="select" 
            >
              {statusList.map((status) => <option value={status.value} key={status.value}> {status.display}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Priority</Form.Label>
            <Form.Control 
              onChange={handlePriorityChange}
              value={priority}
              as="select" 
            >
              {priorityList.map((priority) => <option value={priority.value} key={priority.value}> {priority.display}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Add a Tag to Your Request</Form.Label>
            <TagSelect onChange={handleTagsChanges} defaultValue={tagData} />
          </Form.Group>
          <Row>
            <Col md={9}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  checked={checked}
                  onChange={handleCheckBox}
                  label="Please keep me information for any updates on this request"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Button
                  onClick={handleCreateTask}
                  disabled={!checked}
                >Send</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTask: payload => dispatch(UserStoryActions.createNewTaskRequest(payload)),
});

export default connect(null, mapDispatchToProps)(EditTaskModal);