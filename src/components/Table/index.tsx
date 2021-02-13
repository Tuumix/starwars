import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext/index';
import { TableContext } from '../../contexts/TableContext';
import {
  TableBody,
  TableContainer,
  TD,

  THead,
  TR
} from './styles';

const Table: React.FC = () => {
  const { data } = useContext(TableContext);
  const { filter } = useContext(FilterContext);

  const sortByOrder = () => {
    return filter.filters.order.sort === 'ASC' ? 
      data.sort((a,b) => { return a[filter.filters.order.column].valueOf() 
        > b[filter.filters.order.column].valueOf() ? 1:-1}) : 
          data.sort((a,b) => { return a[filter.filters.order.column].valueOf() 
            < b[filter.filters.order.column].valueOf() ? 1:-1})
  }

  const renderTableData = () => {
    return data && sortByOrder().filter(item => {
      let filterName = filter.filters.filterByName.name;
      return filterName.length > 0 ? item.name.includes(filterName) : item
    }
    ).filter(teste => {
      return filter.filters.filterByNumericValues.every(item => 
        {
          if(item.comparison === 'igual a'){
            console.log('entrando');
            return Number(item.value) === Number(teste[item.column])
          } else{
            return item.comparison === 'maior que' ? 
              Number(item.value) < Number(teste[item.column]) : 
                Number(item.value) > Number(teste[item.column])
          }
        }
      )
    })
    .map((teste, key) => 
      <TR key={key}>                            
        <TD>{teste.name}</TD>
        <TD>{teste.climate}</TD>
        <TD>{teste.created}</TD>
        <TD>{teste.edited}</TD>
        <TD>{'teste.films'}</TD>
        <TD>{teste.gravity}</TD>
        <TD>{teste.population}</TD>
        <TD>{teste.orbital_period}</TD>
        <TD>{teste.rotation_period}</TD>
        <TD>{teste.surface_water}</TD>
        <TD>{teste.terrain}</TD>
        <TD>{teste.url}</TD>
        <TD>{teste.diameter}</TD>
      </TR>
    )
  }

  return (
    <TableContainer>
      <THead>
        <TR>
          {/* {
            !!data && Object.keys(data[0]).map((key, index) => 
            <TH key={index}>{key}</TH>
            )} */}
        </TR>
      </THead>
      <TableBody>
        {renderTableData()}
      </TableBody>
    </TableContainer>
  )
}

export default Table;