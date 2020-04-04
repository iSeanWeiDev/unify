import React, {useState, useEffect} from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import MultiSelect from "react-multi-select-component";
import { connect } from 'react-redux';
import UserStoryActions from '../../actions/userStory';
import '../../styles/components/modal.scss';

function AddNewRequestModal({
  show, 
  onHide, 
  createNewFeature,
}) {
  const tagList = [
    { id:1, label: "Reporting", value: "reporting" },
    { id:2, label: "Admin Setting", value: "adminsetting" },
    { id:3, label: "Others", value: "others" }
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagData, setTagData] = useState("");
  const [checked, setChecked] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTagsChanges = (e) => setTagData(e);
  const handleCheckBox = (e) => setChecked(e.target.checked);

  const handleUpdateTask = () => {
    if (checked) {
      let tags = [];
      for(let obj of tagData) {
        tags.push(obj.id);
      }
      const payload = {name, description, tags};
      payload.project_id = 1;
      createNewFeature(payload);
      onHide();
    }
  }

  return (
    <Modal
      show={show}
      onHide={() => onHide(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Add Feature Request</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Feature request title</Form.Label>
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
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Add a Tag to Your Request</Form.Label>
            <MultiSelect
              options={tagList}
              value={tagData}
              onChange={handleTagsChanges}
              labelledBy={"Select"}
            />
          </Form.Group>
          <Row>
            <Col md={9}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Check
                  type="checkbox"
                  name="checkBox"
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
  createNewFeature: payload => dispatch(UserStoryActions.createNewFeatureRequest(payload)),
});

export default connect(null, mapDispatchToProps)(AddNewRequestModal);
