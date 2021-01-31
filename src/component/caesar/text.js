import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

export const PlainText = ({ onChange, value, shift }) => {
  const changeValue = e => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <div id="text_to_caesar" class="form-group purple-border">
      <textarea id="TextCaesar" rows="5"
        cols="25" class="form-control" value={value} onChange={changeValue} placeholder={'Plain text'} />
    </div>);
}
