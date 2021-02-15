import styled from 'styled-components';
import palette from '../../themes/palette';

export const Container = styled.div`
  padding: 20px;
  background-color: ${palette.backgroundColor};
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 1541px) {
    flex-direction: column;
    height: 60vh;
    justify-content: space-evenly;
  }
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

export const FilterContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1541px) {
    flex-direction: column;
  }
`

export const OrderContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 1541px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

export const Label = styled.label`
  color: ${palette.lightOrange};
`