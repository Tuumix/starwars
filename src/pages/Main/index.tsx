import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import { DropItem } from '../../components/DropDown/types';
import RadioButton from '../../components/Radio';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import { FilterContext } from '../../contexts/FilterContext';
import { TableContext } from '../../contexts/TableContext';
import {palette} from '../../themes/palette';
import { validateField } from '../../utils';
import FilterInfo from './FilterInfo';
import {
  ButtonContainer,
  Container,
  ContainerAction,
  FiltersContainer,
  InputsContainer,
  Select,
  Option,
  OrderContainer,
  FilterContainer,
  Label
} from './styles';


const Main: React.FC = () => {
  const { keys, fetchData, loadPage } = useContext(TableContext);
  const [length, setLength] = useState('');
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('ASC');
  const [orderColumn, setOrderColumn] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedComparison, setSelectedComparison] = useState('');
  const [hasError, setHasError] = useState(false);
  const { 
    filter, 
    setNameFilter, 
    setOrderBy,
    setNumericFilter,
    removeFilter
  } = useContext(FilterContext);
  
  const [columns, setColumns] = useState<Array<DropItem>>([
    {id: 1, name: 'population', disable: false},
    {id: 2, name: 'orbital_period', disable: false},
    {id: 3, name: 'diameter', disable: false},
    {id: 4, name: 'rotation_period', disable: false},
    {id: 5, name: 'surface_water', disable: false},
  ]);

  const comparisons: DropItem[] = [
    {id: 1, name: 'maior que'},
    {id: 2, name: 'menor que'},
    {id: 3, name: 'igual a'},
  ];

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setOrder = (orderColumn: string) => {
    setSelectedOrder(orderColumn);
  }

  const turnPage = (currentPage: number) => {
    if(currentPage > 0) {
      currentPage === 1 ? fetchData() : loadPage(currentPage);
      setPage(currentPage);
    }
  }

  const validateInput = (length: string) => {
    setLength(validateField(length))
  }

  const validateFields = () => {
    if(selectedComparison === '' || selectedColumn === '' || length === ''){
      setHasError(true);
    } else{
      setHasError(false);
      addFilter(selectedColumn, selectedComparison, length);
    }
  }

  const addFilter = (selectedColumn: string, selectedComparison: string,length: string) => {
    setNumericFilter(selectedColumn, selectedComparison, length);
    const result = columns.map(item => {
      if(item.name === selectedColumn) {
        item.disable = true;
      }
      return item;
    })
    setSelectedColumn('');
    setSelectedComparison('');
    setLength('');
    setColumns([...result]);
  }

  const enableColumn = (columnName: string) => {
    for(let i = 0; i < columns.length; i++) {
      if(columns[i].name === columnName){
        columns[i].disable = !columns[i].disable;
      }
    }
    setColumns([...columns]);
  }

  const deleteFilter = (columnName: string) => {
    removeFilter(columnName);
    enableColumn(columnName);
  }

  const renderModal = () => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{content:{
          backgroundColor: palette.darkGray,
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
          handleChange={setSelectedColumn}
        />
        <DropDown 
          value={selectedComparison} 
          dropList={comparisons} 
          handleChange={setSelectedComparison}
        />
        <TextField 
          label="Length" 
          value={length}
          hasError={hasError}
          placeholder="Length" 
          handleChange={validateInput}
        />
        <Button 
          title="Confirm"
          color={palette.reptileGreen}
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
                callback={deleteFilter}
              />
            )
          }
        </FiltersContainer>
      </Modal>
    )
  }

  const renderSelect = () => {
    return (
      <Select onChange={(e) => setOrderColumn(e.target.value)}>
        {
          keys.map((key, index) => 
            <Option key={index} value={key}>{key}</Option>
          )
        }
      </Select>
    )
  }

  const applyOrderBy = () => {
    console.log(orderColumn);
    setOrderBy(orderColumn, selectedOrder);
  }

  return (
    <>
      <Container>
        <FilterContainer>
          <TextField 
            label="Search by Name" 
            value={filter.filters.filterByName.name} placeholder="Name" 
            handleChange={(e) => setNameFilter(e)}
          />
          <OrderContainer>
            <Label>Order by : </Label>
            <RadioButton label="ASC" selectedValue={selectedOrder} handleChange={() => setOrder('ASC')} />  
            <RadioButton label="DESC" selectedValue={selectedOrder} handleChange={() => setOrder('DESC')} />  
            {renderSelect()}
            <Button title="Apply order" color={palette.lightblue} callback={applyOrderBy}/>
          </OrderContainer>
        </FilterContainer> 
        <Table />
        <ContainerAction>
          <ButtonContainer>
            <Button 
              title="<" 
              color={palette.lightOrange} 
              callback={() => turnPage(page - 1)}
              />
            <Button 
              title=">" 
              color={palette.lightOrange} 
              callback={() => turnPage(page + 1)}
            />
          </ButtonContainer>
          <Button 
            title="Add Filter"
            color={palette.yellow}
            callback={() => setIsOpen(true)}
          />
        </ContainerAction>
        {renderModal()}
      </Container>
    </>
  )
}

export default Main;
