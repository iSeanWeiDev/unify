import React from 'react';
import {Form} from 'react-bootstrap';
import { camelCase } from '../../mixins';

const TextArea = ({onChange, label, placeholder, value, name}) => {
  return (
    <Form.Group controlId={`form.${camelCase(name)}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        as="textarea" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        name={name}
      />
    </Form.Group>
  );
};

export default TextArea;