import React, { useContext, useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { FilterContext } from '../../contexts/FilterContext/index';
import { TableContext } from '../../contexts/TableContext';
import {
  TableBody,
  TableContainer,
  TH,
  THead,
  TR
} from './styles';

const Table: React.FC = () => {
  const { data, keys } = useContext(TableContext);
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
      <TableRow key={key} data={teste} />
    )
  }

  return (
    <div style={{overflowX: 'auto'}}>
      <TableContainer>
        <THead>
          <TR>
            {
              keys.map((key, index) => 
                <TableHeader header={key} key={index}>
                  {key}
                </TableHeader>
              )}
          </TR>
        </THead>
        <TableBody>
          {renderTableData()}
        </TableBody>
      </TableContainer>
    </div>
  )
}

export default Table;