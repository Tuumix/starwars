import React from 'react';
import { Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
    const { title, color, callback} = props;
    return (
        <Container 
            onClick={callback}
            style={{borderColor: color, color: color}}
        >
            <p>{title}</p>
        </Container>
    )
}

export default Button;