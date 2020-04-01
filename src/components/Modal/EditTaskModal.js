import React, {useState, useEffect} from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import MultiSelect from "react-multi-select-component";
// import { connect } from 'react-redux';
// import { equals, isEmpty, isNil } from 'ramda';
import '../../styles/components/modal.scss';

function EditTaskModal(props) {
  const tagList = [
    { label: "Reporting", value: "reporting" },
    { label: "Admin Setting", value: "adminsetting" },
    { label: "Others", value: "others" }
  ];

  const priorityList = [
    {value: 'low', display: 'Low'},
    {value: 'medium', display: 'Medium'},
    {value: 'high', display: 'High'},
  ];

  const [title, setTitle] = useState(props.data.name);
  const [description, setDescription] = useState(props.data.description);
  const [priority, setPriority] = useState(props.data.priority);
  const [tags, setTags] = useState(props.data.tags);
  const [checked, setChecked] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  const handleTagsChanges = (e) => {
    setTags(e);
  }

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  }

  const handleUpdateTask = () => {
    if (checked) {
      console.log(title);
      console.log(description);
      console.log(priority);
      console.log(tags);
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Edit User Story</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input your task title..." 
              value={title}
              onChange={handleTitleChange}
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
            <Form.Label>Choose the priority...</Form.Label>
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
            <MultiSelect
              options={tagList}
              value={tags}
              onChange={handleTagsChanges}
              labelledBy={"Select"}
            />
          </Form.Group>
          <Row>
            <Col md={9}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Check
                  type="checkbox"
                  nam="checkBox"
                  checked={checked}
                  onChange={handleCheckBox}
                  label="Please keep me information for any updates on this request"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Button 
                  onClick={handleUpdateTask}
                  disabled={!checked}
                >
                  Send
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTaskModal;