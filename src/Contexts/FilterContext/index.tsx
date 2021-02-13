import React, { createContext, useState } from 'react';
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
    setFilters({...filter});
  }

  return (
    <FilterContext.Provider value={{
      filter: filter,
      setNameFilter: setNameFilter,
      setNumericFilter: setNumericFilter,
      removeFilter: removeFilter,
    }}>
      { children }
    </FilterContext.Provider>
  );
};
