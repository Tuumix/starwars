import React, { useContext } from 'react';
import { TableContext } from '../../Contexts/TableContext';
import { FilterContext } from '../../Contexts/FilterContext';
import {
  TableContainer,
  TD,
  TH,
  THead,
  TR
} from './styles';

const Table: React.FC = () => {
  const { data } = useContext(TableContext);
  const { filters } = useContext(FilterContext);

  
  // function contains(value: string, contain: string){
  //   let found = false, includes = false;
  //   for(let i = 0; i < value.length; i++) {
  //     if(value[i] === contain[i])
  //     {
  //       let j = i;
  //       while(value.length ){
  //       }
  //     }
  //   }
  // }   

  const renderRow = () => {
    return data && data.filter(item => {
      let filtrinho = filters.filters.filterByName.name;
      if(filtrinho.length > 0) {
          return item.name.includes(filtrinho);
      } else {
          return item;
      }
    })
    .filter(teste => {
      return filters.filters.filterByNumericValues.every(item => {
        if(item.comparison === 'maior que') {
          return Number(item.value) < Number(teste[item.column]);
        } else{
          return Number(item.value) > Number(teste[item.column]);
        }     
      })
    })
    .map((teste, key) => 
      <TR style={{borderBottomColor: 'pink'}} key={key}>                            
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
        <tr>
          {/* {
            data && Object.keys(data[0]).map((key, index) => 
            <TH key={index}>{key}</TH>
            )} */}
        </tr>
      </THead>
      <tbody>
        {renderRow()}
      </tbody>
    </TableContainer>
  )
}

export default Table;