import React from 'react';
import Header from './components/Header';
import {TableProvider} from './Contexts/TableContext';
import {FilterProvider} from './Contexts/FilterContext'; 
import Main from './pages/Main';
import { GlobalStyle } from './Themes/GlobalStyle';

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