import React, {useState, useEffect} from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { equals, isEmpty, isNil } from 'ramda';
import UserStoryActions from '../../actions/user-story';
import MultiSelect from "react-multi-select-component";
import '../../styles/components/modal.scss';

function EditRequestModal({
  show,
  data,
  onHide,
  updateFeature,
}) {
  const tagList = [
    { id:1, label: "Reporting", value: "reporting" },
    { id:2, label: "Admin Setting", value: "adminsetting" },
    { id:3, label: "Others", value: "others" }
  ];

  const priorityList = [
    {value: 'inbox', display: 'Inbox'},
    {value: 'next', display: 'Up Next'},
    {value: 'review', display: 'In Review'},
    {value: 'board', display: 'Moved to Feature Board'},
  ];

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [status, setStatus] = useState(data.status);
  const [tagData, setTagData] = useState(data.tags);
  const [checked, setChecked] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleTagDataChanges = (e) => setTagData(e);
  const handleCheckBox = (e) => setChecked(e.target.checked);

  const handleUpdateTask = () => {
    if (checked) {
      // let tags= [];
      // tagData.forEach(element => {
      //   tags.push(element.id);
      // });
      // const payload = {
      //   name, description, status, tags
      // }
      const payload = {
        name, description, status
      }
      payload.id = data.id;
      updateFeature(payload);
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
          <span>Edit Feature Request</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
           <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input your request title..." 
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
            <Form.Label>Choose the status...</Form.Label>
            <Form.Control 
              onChange={handleStatusChange}
              value={status}
              as="select" 
            >
              {priorityList.map((priority) => <option value={priority.value} key={priority.value}> {priority.display}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Add a Tag to Your Request</Form.Label>
            <MultiSelect
              options={tagList}
              value={tagData}
              onChange={handleTagDataChanges}
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

const mapDispatchToProps = dispatch => ({
  updateFeature: payload => dispatch(UserStoryActions.updateFeatureRequest(payload)),
});

export default connect(null, mapDispatchToProps)(EditRequestModal);