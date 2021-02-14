import React from 'react';
import Header from './components/Header';
import {TableProvider} from './contexts/TableContext';
import {FilterProvider} from './contexts/FilterContext'; 
import Main from './pages/Main';
import { GlobalStyle } from './themes/GlobalStyle';

const App: React.FC = () => {
  return (
    <TableProvider>
      <FilterProvider>
        <GlobalStyle/>
        <Header />
        <Main />
      </FilterProvider>
    </TableProvider>
  )
}

export default App;