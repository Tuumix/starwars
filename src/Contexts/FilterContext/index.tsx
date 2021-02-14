import React, { createContext, useState } from 'react';
import {
  FiltersTypes,
  NumericFilter
} from '../../types/FilterTypes';
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

  const setNameFilter = (columnName: string) => {
    filter.filters.filterByName.name = columnName;
    setFilters({...filter});
  }

  const setNumericFilter = (columnName: string, comparison: string, value: string) => {
    const obj: NumericFilter = {column: columnName, comparison: comparison, value: value};
    filter.filters.filterByNumericValues.push(obj);
    setFilters({...filter});
  }

  const setOrderBy = (columnName: string, order: string) => {
    filter.filters.order.column = columnName;
    filter.filters.order.sort = order;
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
      filter,
      setNumericFilter,
      setNameFilter,
      removeFilter,
      setOrderBy,
    }}>
      { children }  
    </FilterContext.Provider>
  );
};
