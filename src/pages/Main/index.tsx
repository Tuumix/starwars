import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import RadioButton from '../../components/Radio';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import { FilterContext } from '../../contexts/FilterContext';
import { TableContext } from '../../contexts/TableContext';
import FilterInfo from './FilterInfo';
import {
  ButtonContainer,
  Container,
  ContainerAction,
  FiltersContainer,
  InputsContainer
} from './styles';


const Main: React.FC = () => {
  const [name, setName] = useState('');
  const [length, setLength] = useState('');
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { fetchData, loadPage } = useContext(TableContext);
  const [selectedOrder, setSelectedOrder] = useState('ASC');
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

  const validateFields = () => {
    if(selectedComparison === '' || selectedColumn === '' || length === ''){
      console.log('ops, it looks like you are trying to insert nothing on filter!');
    } else{
      addFilter(length);
    }
  }


  const setColumnName = (columnName: string) => {
    setName(columnName);
    setNameFilter(columnName);
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
        <DropDown 
          value={selectedColumn} 
          dropList={columns} 
          handleChange={setColumn}
        />
        <DropDown 
          value={selectedComparison} 
          dropList={comparisons} 
          handleChange={setComparison}
        />
        <TextField 
          label="Length" 
          value={length} 
          placeholder="Length" 
          handleChange={setLength}
        />
        <Button 
          title="Confirm"
          color="lightblue"
          callback={() => validateFields()}
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

  const setOrder = (e: string) => {
    setSelectedOrder(e);
  }

  return (
    <>
      <Container> 
        <div style={{ marginBottom: 10, width: 200}}>
          <TextField 
            label="Search by Name" 
            value={name} placeholder="Name" 
            handleChange={(e) => setColumnName(e)}
          />
          <div >
            <RadioButton label="ASC" selectedValue={selectedOrder} handleChange={() => setOrder('ASC')} />  
            <RadioButton label="DESC" selectedValue={selectedOrder} handleChange={() => setOrder('DESC')} />  
          </div>
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
          <Button 
            title="Add Filter"
            color="#fb5607"
            callback={() => setIsOpen(true)}
          />
        </ContainerAction>
        {renderModal()}
      </Container>
    </>
  )
}

export default Main;
