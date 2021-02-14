import styled from 'styled-components';
import palette from '../../themes/palette';

export const Container = styled.div`
  padding: 20px;
  background-color: #353b48;
  height: 92vh;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  margin-top: 5px;
`

export const ContainerAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content:space-evenly;
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 42vh;
  padding: 20px;
`

export const Option = styled.option`
  width: 100px;
  padding: 8px;
`

export const Select = styled.select`
  appearance: none;
  width: 100px;
  padding: 8px;
  background-color: ${palette.dark};
  color: ${palette.lightOrange};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: none;
  text-align: center;
`