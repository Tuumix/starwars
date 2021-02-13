import React, { useContext } from 'react';
import Button from '../../../components/Button';
import { FilterContext } from '../../../contexts/FilterContext';
import { NumericFilter } from '../../../Types/FilterTypes';
import {
  Container, 
  SubContaienr
} from './styles';

const FilterInfo: React.FC<NumericFilter> = ({ column, comparison, value}) => {
  const { removeFilter } = useContext(FilterContext);
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Container>
        <SubContaienr>
          <p>{column}</p>
          <p>{comparison}</p>
          <p>{value}</p>
        </SubContaienr>
      </Container>
      <Button 
        title="Delete Filter"
        color="red"
        callback={() => removeFilter(column)}
      />
    </div>
  )
}

export default FilterInfo;