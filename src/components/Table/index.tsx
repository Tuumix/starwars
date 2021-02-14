import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext/index';
import { TableContext } from '../../contexts/TableContext';
import {
  TableBody,
  TableContainer,
  THead,
  TR
} from './styles';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table: React.FC = () => {
  const { data, keys } = useContext(TableContext);
  const { filter } = useContext(FilterContext);

  const sortByOrder = () => {
    const result = data.sort((a,b) => { 
      return a[filter.filters.order.column].valueOf().toString()
        .localeCompare(b[filter.filters.order.column].valueOf().toString(), 
        undefined, {
          numeric: true,
          sensitivity: 'base'
    });
  });
    return filter.filters.order.sort === 'ASC' ? result:result.reverse();
  }

  const renderTableData = () => {
    console.log(filter);
    return data && sortByOrder().filter(item => {
      let filterName = filter.filters.filterByName.name;
      return filterName.length > 0 ? item.name.includes(filterName) : item
    }
    ).filter(row => {
      return filter.filters.filterByNumericValues.every(filterNumeric => 
        {
          if(filterNumeric.comparison === 'igual a'){
            return Number(filterNumeric.value) === Number(row[filterNumeric.column])
          } else{
            return filterNumeric.comparison === 'maior que' ? 
              Number(filterNumeric.value) < Number(row[filterNumeric.column]) : 
                Number(filterNumeric.value) > Number(row[filterNumeric.column])
          }
        }
      )
    }).map((teste, key) => 
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

export default React.memo(Table);