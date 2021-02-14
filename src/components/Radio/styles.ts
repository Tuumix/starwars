import styled from 'styled-components';
import palette from '../../themes/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.span`
  font-size: 15px;
  margin-left: 10px;
  color: ${palette.lightOrange};
  margin-top: 10px;
`