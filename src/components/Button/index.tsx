import React from 'react';
import { ButtonProps } from './types';
import { 
  Container, 
  Title 
} from './styles';

const Button: React.FC<ButtonProps> = ({title, color, callback}) => {
  return (
    <Container 
      onClick={callback}
      style={{borderColor: color, color: color}}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default Button;