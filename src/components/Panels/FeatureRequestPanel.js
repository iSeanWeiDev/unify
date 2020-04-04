import React, { useState, useEffect } from 'react';
import {FormGroup, Card, Accordion, Button, useAccordionToggle} from 'react-bootstrap';
import EditRequestModal from '../Modal/EditRequestModal';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, e => {
    e.stopPropagation();
  });

  return (
    <Button
      variant="link"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function FeatureRequestPanel({title, requests}) {
  const [editModalShow, setEditModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  const handleEditModalShow = (request) => {
    setEditModalData(request);
    setEditModalShow(true);
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
                    onClick={() => handleEditModalShow(request)}  
                    className="request-card"
                  >
                    <Card.Header className={request.status}>
                      <CustomToggle eventKey={request.id}>
                        {request.name}
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={request.id}>
                      <Card.Body>
                        {request.description}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              )
            })}

            {editModalShow && (
              <EditRequestModal
                show={editModalShow}
                data={editModalData}
                onHide={() => setEditModalShow(false)}
              />
            )}
          </Accordion>
        </Card.Body>
      </Card>
    </FormGroup>
  )
}

export default FeatureRequestPanel;