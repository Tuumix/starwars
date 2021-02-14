import React from 'react';
import { BiX } from "react-icons/bi";
import palette from '../../../themes/palette';
import {
  Container,
  ContainerInfo,
  Info,
  RemoveButton,
  SubContainer
} from './styles';
import { FilterInfoProps } from './types';

const FilterInfo: React.FC<FilterInfoProps> = ({ column, comparison, value, callback}) => {
  return (
    <Container> 
      <SubContainer>
        <ContainerInfo>
          <Info>
            {column}
          </Info>
          <Info>
            {comparison}
          </Info>
          <Info>
            {value}
          </Info>
        </ContainerInfo>
      </SubContainer>
      <RemoveButton onClick={() => callback(column)}>
        <BiX size={30} color={palette.redPigment} />
      </RemoveButton>
    </Container>
  )
}

export default FilterInfo;