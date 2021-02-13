import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import { DropItem } from '../../components/DropDown/types';
import { TableContext } from '../../Contexts/TableContext';
import { FilterContext } from '../../Contexts/FilterContext';

import Modal from 'react-modal';
import {
  ButtonContainer,
  Container,
  ContainerAction,
} from './styles';
import FilterInfo from './FilterInfo';

const Main: React.FC = () => {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedComparison, setSelectedComparison] = useState('');
  const { fetchData, loadPage } = useContext(TableContext);
  const { filters, setNameFilter, setNumericFilter } = useContext(FilterContext);

  const [page, setPage] = useState(0);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [columns, setColumns] = useState<Array<DropItem>>([
    {id: 1, name: 'population', available: true},
    {id: 2, name: 'orbital_period', available: true},
    {id: 3, name: 'diameter', available: true},
    {id: 4, name: 'rotation_period ', available: true},
    {id: 5, name: 'surface_water', available: true},
  ]);

  const values = [
    {id: 1, name: 'maior que'},
    {id: 2, name: 'menor que'},
    {id: 3, name: 'igual a'},
  ] as DropItem[];



  useEffect(() => {
    fetchData();
  }, [fetchData]);


  function turnPage(currentPage: number) {
    if(currentPage > 0) {
      currentPage === 1 ? fetchData() : loadPage(currentPage);
      setPage(currentPage);
    }
  }

  const renderModal = () => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{content:{
          backgroundColor: '#2f3640',
          top: '50%',
          left: '50%',
          right: '40%',
          bottom: '0%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        },
        overlay: {
          backgroundColor: 'transparent',
        }
      }}
      >
        <div style={{display: 'flex', alignItems: 'center' ,width: '100%', justifyContent: 'space-evenly'}}>
          <DropDown value={selectedColumn} dropList={columns} handleChange={setSelectedColumn}/>
          <DropDown value={selectedComparison} dropList={values} handleChange={setSelectedComparison}/>
          <TextField label="Length" placeholder="Length" handleChange={(e) => setValue(e)}/>
          <Button 
            title="Add Filter"
            color="lightblue"
            callback={() => setNumericFilter(selectedColumn, 'maior que', value)}
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'pink', height: '42vh'}}>
          {
            filters.filters.filterByNumericValues.map((filter,key) => 
              <FilterInfo key={key} 
                column={filter.column} 
                comparison={filter.comparison} 
                value={filter.value} 
              />
            )
          }
        </div>
      </Modal>
    )
  }


  return (
    <>
      <Container>
        <div style={{marginBottom: 10, width: 200}}>
          <TextField label="Search by Name" placeholder="Name" handleChange={(e) => setNameFilter(e)}/>
        </div>
        <Table />
        <ContainerAction>
          <ButtonContainer>
            <Button 
              title="<" 
              color='#f9c74f' 
              callback={() => turnPage(page - 1)}
              />
            <Button 
              title=">" 
              color='#f9c74f' 
              callback={() => turnPage(page + 1)}
            />
          </ButtonContainer>
        </ContainerAction>
        {renderModal()}
        <Button 
          title="Open Modal"
          color="lightblue"
          callback={() => setIsOpen(true)}
        />
      </Container>
    </>
  )
}

export default Main;
