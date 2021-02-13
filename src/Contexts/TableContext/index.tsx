import React, { createContext, useCallback, useState } from 'react';
import { DataProps, TableContextProps } from './types';

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);

export const TableProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<DataProps>>([]);

  const loadPage = (page: number) => {
    fetch(`https://swapi-trybe.herokuapp.com/api/planets/?page=${page}`)
      .then(response => response.json())
        .then(data => setData(data.results));    
  }

  const fetchData = useCallback(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(response => response.json())
        .then(data => setData(data.results));
  }, [])

  return (
    <TableContext.Provider value={{
      data: data,
      fetchData: fetchData,
      loadPage: loadPage,
    }}>
      { children }
    </TableContext.Provider>
  );
};
