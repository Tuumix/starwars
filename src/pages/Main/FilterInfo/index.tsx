import React from 'react';
import { NumericFilter } from '../../../Types/FilterTypes';
import {
  Container, 
  SubContaienr
} from './styles';

const FilterInfo: React.FC<NumericFilter> = ({ column, comparison, value}) => {
  return (
    <Container>
      <SubContaienr>
        <p>{column}</p>
        <p>{comparison}</p>
        <p>{value}</p>
      </SubContaienr>
    </Container>
  )
}

export default FilterInfo;