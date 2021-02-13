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
  const [filters, setFilters] = useState<FiltersTypes>({
    filters: {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
      ]
    }
  })

  const setNumericFilter = (column: string, comparison: string, value: string) => {
    const obj: NumericFilter = {column: column, comparison: comparison, value: value};
    filters.filters.filterByNumericValues.push(obj);
    setFilters({...filters});
  }

  const setNameFilter = (value: string) => {
    filters.filters.filterByName.name = value;
    setFilters({...filters});
  }

  return (
    <FilterContext.Provider value={{
      filters: filters,
      setNameFilter: setNameFilter,
      setNumericFilter: setNumericFilter,
    }}>
      { children }
    </FilterContext.Provider>
  );
};
