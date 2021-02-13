import React, { createContext, useState } from 'react';
import { DropItem } from '../../components/DropDown/types';
import {
  FiltersTypes,
  NumericFilter
} from '../../Types/FilterTypes';
import { FilterContextProps } from './types';

export const FilterContext = createContext<FilterContextProps>(
  {} as FilterContextProps
);

export const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilters] = useState<FiltersTypes>({
    filters: {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
      ],
      order: {
        column: 'name',
        sort: 'ASC'
      }
    }
  })
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedComparison, setSelectedComparison] = useState('');
  const [value, setValue] = useState('');

  const [columns, setColumns] = useState<Array<DropItem>>([
    {id: 1, name: 'population', disable: false},
    {id: 2, name: 'orbital_period', disable: false},
    {id: 3, name: 'diameter', disable: false},
    {id: 4, name: 'rotation_period ', disable: false},
    {id: 5, name: 'surface_water', disable: false},
  ]);

  const comparisons: DropItem[] = [
    {id: 1, name: 'maior que'},
    {id: 2, name: 'menor que'},
    {id: 3, name: 'igual a'},
  ]

  const setColumn = (columnName: string) => {
    setSelectedColumn(columnName);
  }

  const setComparison = (comparison: string) => {
    setSelectedComparison(comparison);
  }

  const setNumericFilter = (columnName: string, comparison: string, value: string) => {
    const obj: NumericFilter = {column: columnName, comparison: comparison, value: value};
    filter.filters.filterByNumericValues.push(obj);
    setFilters({...filter});
  }

  const setNameFilter = (columnName: string) => {
    filter.filters.filterByName.name = columnName;
    // setName(name);
    setFilters({...filter});
  }

  const removeFilter = (columnName: string) => {
    const result = filter.filters.filterByNumericValues.filter(item => 
      item.column !== columnName
    )
    filter.filters.filterByNumericValues = result;
    enableColumn(columnName);
    setFilters({...filter});
  }
  
  const addFilter = (length: string) => {
    setNumericFilter(selectedColumn, selectedComparison, length);
    const result = columns.map(item => {
      if(item.name === selectedColumn) {
        item.disable = true;
      }
      return item;
    })
    setSelectedColumn('');
    setComparison('');
    setValue('');
    setColumns([...result]);
  }

  const enableColumn = (columnName: string) => {
    for(let i = 0; i < columns.length; i++) {
      if(columns[i].name === columnName){
        columns[i].disable = !columns[i].disable;
      }
    }
    setColumns([...columns]);
  }

  return (
    <FilterContext.Provider value={{
      filter: filter,
      columns: columns,
      comparisons: comparisons,
      selectedColumn: selectedColumn,
      selectedComparison: selectedComparison,
      value: value,
      setNameFilter: setNameFilter,
      removeFilter: removeFilter,
      addFilter: addFilter,
      setColumn: setColumn,
      setComparison:setComparison,
    }}>
      { children }  
    </FilterContext.Provider>
  );
};
