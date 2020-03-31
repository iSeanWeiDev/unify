import React, { useState, useEffect } from 'react';
import {FormGroup, Card, Accordion, Button} from 'react-bootstrap';
import EditRequestModal from '../Modal/EditRequestModal';

function FeatureRequestPanel({title, requests}) {
  const [editModalShow, setEditModalShow] = useState(false);
  const [addNewModalShow, setAddNewModalShow] = useState(false);

  const handleEditModalShow = () => {
    setEditModalShow(true)
  };

  const handleAddNewModalShow = () => {
    setAddNewModalShow(true)
  };

  return (
    <FormGroup className="panel">
      <Card>
        <Card.Body>
          <Card.Title>
            <span className="title-span">
              {title}
            </span>
          </Card.Title>
          <Accordion>
            {requests.map(request => {
              return (
                <div key={request.id}>
                  <Card 
                    onClick={handleEditModalShow}  
                    className="request-card"
                  >
                    <Card.Header className={request.status}>
                      <Accordion.Toggle as={Button} variant="link" eventKey={request.id}>
                        {request.name}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={request.id}>
                      <Card.Body>
                        {request.description}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <EditRequestModal
                    show={editModalShow}
                    data={request}
                    onHide={() => setEditModalShow(false)}
                  />
                </div>
              )
            })}
              
          </Accordion>
        </Card.Body>
      </Card>
    </FormGroup>
  )
}

export default FeatureRequestPanel;