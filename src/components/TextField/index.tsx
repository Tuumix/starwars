import React from 'react';
import { 
  Container,
  TextFieldContainer,
  Input,
  Label,
} from './styles';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, handleChange }) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <TextFieldContainer>
        <Input 
          type="text" 
          placeholder={placeholder} 
          onChange={(e) => handleChange(e.target.value)} 
        />
      </TextFieldContainer>
    </Container>
  )
}

export default TextField;