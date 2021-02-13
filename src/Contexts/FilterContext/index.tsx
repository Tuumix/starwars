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

  const setNome = (name: string) => { //TODO find a better name
    setValue(name);
  } 

  const setNumericFilter = (column: string, comparison: string, value: string) => {
    const obj: NumericFilter = {column: column, comparison: comparison, value: value};
    filter.filters.filterByNumericValues.push(obj);
    setFilters({...filter});
  }

  const setNameFilter = (value: string) => {
    filter.filters.filterByName.name = value;
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
  const addFilter = (column: string) => {
    setNumericFilter(selectedColumn, selectedComparison, value);
    const result = columns.map(item => {
      if(item.name === column) {
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
    columns.map(column => 
      column.name === columnName ? column.disable = false: column
    )

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
      setNome: setNome, //TODO find a better name
    }}>
      { children }
    </FilterContext.Provider>
  );
};
