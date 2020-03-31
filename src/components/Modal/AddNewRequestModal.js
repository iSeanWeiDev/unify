import React, {useState, useEffect} from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import MultiSelect from "react-multi-select-component";
import '../../styles/components/modal.scss';

function AddNewRequestModal(props) {
  const tagList = [
    { label: "Reporting", value: "reporting" },
    { label: "Admin Setting", value: "adminsetting" },
    { label: "Others", value: "others" }
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [checked, setChecked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleTagsChanges = (e) => {
    setTags(e);
  }

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  }

  const handleUpdateTask = () => {
    // console.log(props.hide)
    if (checked) {
      console.log(title);
      console.log(description);
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
          <span>Add Feature Request</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input your full name..." 
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Input your email..." 
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Input your phone number..." 
              value={phone}
              onChange={handlePhoneChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input your request title..." 
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

export default AddNewRequestModal;