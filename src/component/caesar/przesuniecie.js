import React, { useState } from 'react'
import { Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core'

export const Shift = ({ onChange }) => {
  const [value, setValue] = useState('Enter a shift amount')

  const changeValue = e => {
    const value = e.target.value
    setValue(value)
    onChange(value)
  }

  var index = 0;
  var list1 = [];
  for (var i = 1; i < 26; i++) {
    list1[index] = i;
    index++;
  }

  index = 0;
  var list2 = [];
  for (var i = 1; i < 26; i++) {
    list2[index] = i;
    index++;
  }

  return (
    <FormControl>
      <Select id="b" value={value} onChange={changeValue} placeholder={'ss'}>
        <MenuItem value="" disabled>
          Enter shift amount
          </MenuItem>
        {/* {list1.map((i) => (
          <MenuItem value={i}>{i - 26}</MenuItem>
        ))} */}
        {list2.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
      <FormHelperText>Enter Shift amount</FormHelperText>
    </FormControl>
  )
}