import React, {
  createContext, 
  useCallback, 
  useState 
} from 'react';
import { DataProps, TableContextProps } from './types';
import api from '../../services/api';
const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);

const TableProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<DataProps>>([]);
  const keys: Array<string> = Object.keys(data[0] || {}).filter(key =>{
    return key !== 'residents';
  })

  const loadPage = (page: number) => {
    try{
      const response = api.get(`?page=${page}`);
      const data = response || [];
      data.then(response => response.data)
        .then(response => setData(response.results));
    }catch(error) {
      console.log('Error->TableContext->loadPage', error);
    }
  }

  const fetchData = useCallback(async () => {
    try{
      api.get('')
        .then(response => response.data)
          .then(data => setData(data.results));
    }catch(error) {
      console.log('Error->TableContext->fetchData');
    }
  }, [])

  return (
    <TableContext.Provider value={{
      data,
      keys,
      fetchData,
      loadPage,
    }}>
      { children }
    </TableContext.Provider>
  );
};

export {TableContext, TableProvider}
