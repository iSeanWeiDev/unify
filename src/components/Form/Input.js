import React from 'react';
import {Form} from 'react-bootstrap';
import { camelCase } from '../../mixins';

const Input = ({onChange, label, placeholder, value, name}) => {
  return (
    <Form.Group controlId={`form.${camelCase(name)}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        name={name}
      />
    </Form.Group>
  );
};

export default Input;