import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import { DropItem } from '../../components/DropDown/types';
import { TableContext } from '../../contexts/TableContext';
import { FilterContext } from '../../contexts/FilterContext';

import Modal from 'react-modal';
import {
  ButtonContainer,
  Container,
  ContainerAction,
  FiltersContainer,
  InputsContainer,
} from './styles';
import FilterInfo from './FilterInfo';

const Main: React.FC = () => {
  const { fetchData, loadPage } = useContext(TableContext);
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { 
    filter, 
    columns, 
    comparisons, 
    selectedColumn, 
    selectedComparison, 
    setNameFilter, 
    addFilter, 
    setColumn, 
    setComparison, 
    setNome 
  } = useContext(FilterContext);

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
      <InputsContainer>
        <DropDown value={selectedColumn} dropList={columns} handleChange={setColumn}/>
        <DropDown value={selectedComparison} dropList={comparisons} handleChange={setComparison}/>
        <TextField label="Length" placeholder="Length" handleChange={(e) => setNome(e)}/>
        <Button 
          title="Add Filter"
          color="lightblue"
          callback={() => addFilter(selectedColumn)}
        />
      </InputsContainer>
        <FiltersContainer>
          {
            filter.filters.filterByNumericValues.map((filter,key) => 
              <FilterInfo key={key} 
                column={filter.column} 
                comparison={filter.comparison} 
                value={filter.value} 
              />
            )
          }
        </FiltersContainer>
      </Modal>
    )
  }

  return (
    <>
      <Container>
        <div style={{marginBottom: 10, width: 200}}> //TODO fix this using styled components
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
          title="Add Filter"
          color="lightblue"
          callback={() => setIsOpen(true)}
        />
      </Container>
    </>
  )
}

export default Main;
