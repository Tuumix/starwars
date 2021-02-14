import styled from 'styled-components';
import palette from '../../themes/palette';

export const Dropbtn = styled.div`
  display: inline-block;
  flex: 1 1 300px;
  border-width: 2px;
  text-align: center;
  color: black;
  padding: 14px 16px;
  background-color: ${palette.dark};
  text-decoration: none;
  color: ${palette.lightOrange};
  &:hover {
    display: block;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  background-color: #f9f9f9;
  min-width: 160px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const DropDownLi = styled.li`
  display: inline-block;

  &:hover {
    display: block;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const Option = styled.button`
  width: 100%;
  text-decoration: none;
  padding: 14px;
  text-align: left;
  display: block;
  color: #18FFFF;
  outline: none;
  background-color: #353b48;
  &:hover {
    color: ${palette.lightOrange};
  }
`

export const ColumnName = styled.p`

`