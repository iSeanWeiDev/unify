import React from 'react';
import { Container } from 'react-bootstrap';

const BasicLayout = (props) => {
  return (
    <div>
      <div className="layout">
        <Container className="content">
          {props.children}
        </Container>
      </div>
    </div>
  );
};

export default BasicLayout;