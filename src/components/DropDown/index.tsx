import React from 'react';
import palette from '../../themes/palette';
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
      <Dropbtn>
        {value ? <p>{value}</p> : <p>Select a Column</p>}
      </Dropbtn>
      <DropDownContent>
        {
          dropList.map(item => 
            <Option 
              type="button" 
              key={item.id} 
              onClick={() => handleChange(item.name)} 
              disabled={item.disable}
              >
              <p 
                style={{color: item.disable ? palette.redPigment: palette.lightOrange}}
              >
                {item.name}
              </p>
            </Option>
          )
        }
      </DropDownContent>
    </DropDownLi>
  )
}

export default DropDown;