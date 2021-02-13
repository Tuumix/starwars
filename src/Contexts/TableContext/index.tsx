import React, { createContext, useCallback, useEffect, useState } from 'react';
import { DataProps, TableContextProps } from './types';

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);

export const TableProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<DataProps>>([]);
  const keys: Array<string> = Object.keys(data[0] || {}).filter(key =>{
    return key !== 'residents';
  })

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
      keys: keys,
      fetchData: fetchData,
      loadPage: loadPage,
    }}>
      { children }
    </TableContext.Provider>
  );
};
