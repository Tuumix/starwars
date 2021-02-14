import React from 'react';
import { Container, Image } from './styles';
import Logo from '../../assets/Images/StarWarsImage.png';
const Header: React.FC = () => {
  return (
    <Container>
      <Image src={Logo}/>
    </Container>
  )
}

export default Header;