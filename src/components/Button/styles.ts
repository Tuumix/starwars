import styled from 'styled-components';
import palette from '../../themes/palette';

export const Container = styled.button`
  width: 150px;
  height: 30px;
  outline: none;
  border-width: 2px;
  border-radius: 5px;
  background-color: ${palette.dark};
  outline: none;
  &:hover {
    border-width: 3px;
  }
`

export const Title = styled.p`
  font-size: 20px;
`