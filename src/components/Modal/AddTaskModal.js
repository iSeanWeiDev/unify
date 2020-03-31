import React, {useState} from 'react';
import {
  Row,
  Col, 
  Modal, 
  Button, 
  Form
} from 'react-bootstrap';
import MultiSelect from "react-multi-select-component";
import '../../styles/components/modal.scss';

function EditTaskModal(props) {
  const options = [
    { label: "Reporting", value: "reporting" },
    { label: "Admin Setting", value: "adminsetting" },
    { label: "Others", value: "others" }
  ];
  const [selected, setSelected] = useState([]);
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
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control 
              type="text" 
              placeholder="Name" 
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control 
              type="email" 
              placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Phone</Form.Label> */}
            <Form.Control 
              type="number" 
              placeholder="Phone" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What is your request?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Add a Tag to Your Request</Form.Label>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy={"Select"}
            />
          </Form.Group>
          <Row>
            <Col md={9}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label="Please keep me information for any updates on this request"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Button onClick={props.onHide}>Send</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTaskModal;