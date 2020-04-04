import React from 'react';
import {Form} from 'react-bootstrap';
import { camelCase } from '../../mixins';

const Select = ({onChange, label, value, name, options}) => {
  return (
    <Form.Group controlId={`form.${camelCase(name)}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        as="select"  
        value={value}
        onChange={onChange}
        name={name}
      >
        {options.map((option) => <option value={option.value} key={option.value}> {option.label}</option>)}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;