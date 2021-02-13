import React from 'react';
import { THeader } from './styles';
import { TableHeaderProps } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({header}) => {
  return(
    <THeader>
      {header}
    </THeader>
  )
}

export default TableHeader;