import React from 'react';
import {
  TableRow,
  Cell,
  Link
} from './styles'
import { TableRowProps } from './types';

const Row:React.FC<TableRowProps> = ({data}) => {
  return (
    <TableRow>
      <Cell>{data.name}</Cell>
      <Cell>{data.rotation_period}</Cell>
      <Cell>{data.orbital_period}</Cell>
      <Cell>{data.diameter}</Cell>
      <Cell>{data.climate}</Cell>
      <Cell>{data.gravity}</Cell>
      <Cell>{data.terrain}</Cell>
      <Cell>{data.surface_water}</Cell>
      <Cell>{data.population}</Cell>
      <Cell>{'data.films'}</Cell>
      <Cell>{new Date(data.created).toLocaleDateString('pt-BR')}</Cell>
      <Cell>{new Date(data.created).toLocaleDateString('pt-BR')}</Cell>
      <Cell>{<Link href={data.url}>{data.url}</Link>}</Cell>
    </TableRow>
  )
}

export default Row;