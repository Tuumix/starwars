import styled from 'styled-components';
import palette from '../../../themes/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: ${palette.lightOrange};
  width: 300px;
  height: 300px;
  border-style: solid;
  border-radius: 10px;
  background-color: ${palette.dark};
`

export const ContainerInfo = styled.div`
  flex-direction: column;
`

export const RemoveButton = styled.button`
  width: 150px;
  height: 30px;
  outline: none;
  border-width: 2px;
  border-radius: 5px;
  background-color: ${palette.dark};
  outline: none;
  margin-top: 10px;
  &:hover {
    border-width: 3px;
  }
`

export const Info = styled.p`
  font-size: 20px;
  color: ${palette.lightOrange};
  margin-top: 20px;
`