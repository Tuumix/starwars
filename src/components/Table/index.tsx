import React from 'react';
import { 
    TableBody,
    TableContainer, 
    TD, 
    THead,
    TR, 
} from './styles';
import { TableProps } from './types';

 
const Table: React.FC<TableProps> = (props) => {
    const { data } = props;


    const renderRow = () => {
        return data && data.map((item, key) => 
            <TR style={{borderBottomColor: 'pink'}} key={key}>                            
                <TD>{item.name}</TD>
                <TD>{item.climate}</TD>
                <TD>{item.created}</TD>
                <TD>{item.edited}</TD>
                <TD>{'item.films'}</TD>
                <TD>{item.gravity}</TD>
                <TD>{item.orbital_period}</TD>
                <TD>{item.rotation_period}</TD>
                <TD>{item.surface_water}</TD>
                <TD>{item.terrain}</TD>
                <TD>{item.url}</TD>
            </TR>   
        )
    }
    return (
        <TableContainer>
            <THead>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>

                </tr>
            </THead>
            <tbody>
                {renderRow()}
            </tbody>
        </TableContainer>
    )
}

export default Table;