import styled from 'styled-components';
import palette from '../../../themes/palette';

export const Cell = styled.td`
  text-align: left;
  color: #dcdde1;
  border-bottom: 4px solid ${palette.dark};
  width: 150px;
  padding: 5px;
`


export const TableRow = styled.tr`
`

export const Link = styled.a`
  color: ${palette.lightOrange};
`