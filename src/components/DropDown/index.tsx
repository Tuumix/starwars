import React from 'react';
import {
  Dropbtn,
  DropDownContent, 
  DropDownLi,
  Option
} from './styles';
import { DropDownProps } from './types';

const DropDown: React.FC<DropDownProps> = ({ value, dropList, handleChange }) => {

  return (
    <DropDownLi>
      <Dropbtn onClick={() => console.log("DropDown")}>
        {value ? <p>{value}</p> : <p>Select a Column</p>}
      </Dropbtn>
      <DropDownContent>
        {
          dropList.map(item => 
            <Option 
              type="button" 
              key={item.id} 
              onClick={() => handleChange(item.name)} 
              >
              <p>{item.name}</p>
            </Option>
          )
        }
      </DropDownContent>
    </DropDownLi>
  )
}

export default React.memo(DropDown);