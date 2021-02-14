import React from 'react';
import {
  Container,
  ErrorMessage,
  Input,
  Label, TextFieldContainer
} from './styles';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({ value, hasError ,label, placeholder, handleChange }) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <TextFieldContainer>
        <Input 
          type="text" 
          placeholder={placeholder} 
          value={value}
          onChange={(e) => handleChange(e.target.value)} 
        />
      </TextFieldContainer>
      { hasError && <ErrorMessage>Fill all the fields.</ErrorMessage>}
    </Container>
  )
}

export default TextField;