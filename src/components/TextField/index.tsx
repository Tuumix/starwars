import React from 'react';
import {
  Container,

  Input,
  Label, TextFieldContainer
} from './styles';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({ value, label, placeholder, handleChange }) => {
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
    </Container>
  )
}

export default TextField;