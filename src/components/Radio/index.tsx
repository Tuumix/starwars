import React from 'react';
import { Container, Label } from './styles';
import { RadioButtonProps } from './types';

const RadioButton: React.FC<RadioButtonProps> = ({ label, selectedValue, handleChange}) => {
  return (
    <Container>
      <input type="radio" checked={selectedValue === label} onChange={handleChange} />
      <Label>{label}</Label>
    </Container>
  )
}

export default RadioButton;