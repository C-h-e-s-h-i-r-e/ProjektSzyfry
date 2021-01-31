import React, { useState } from 'react'
import { Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core'

export const Shift_Multi = ({ onChange }) => {
    const [value, setValue] = useState('')

    const changeValue = e => {
        const value = e.target.value
        setValue(value)
        onChange(value)
    }

    return (
        <FormControl>
            <input id="a" value={value} onChange={changeValue} type="text" placeholder="Enter Shift Multi"
            />
        </FormControl>
    )
}