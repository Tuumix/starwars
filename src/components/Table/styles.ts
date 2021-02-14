import styled from 'styled-components';
import palette from '../../themes/palette';

export const TableContainer = styled.table`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${palette.darkGray};
  border: none;
  margin-top: 10px;
`

export const THead = styled.thead`
  background-color: ${palette.dark};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  font-size: 20px;
`

export const TD = styled.td`
  text-align: left;
  color: #dcdde1;
  border-bottom: 1px solid #18FFFF;
  width: 150px;
  padding: 5px;
`


export const TR = styled.tr`
`

export const TableBody = styled.tbody``
export const TH = styled.th`
  color: #F7F7F7
;
`
