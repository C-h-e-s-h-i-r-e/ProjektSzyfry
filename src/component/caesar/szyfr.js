import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

export const CypherText = ({ onChange, value, shift }) => {
  const changeValue = e => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <div id="caesar_to_text" class="form-group purple-border">
      <textarea id="CipherCaesar" rows="5"
        cols="25" class="form-control" value={value} onChange={changeValue} placeholder={'Cypher text'} />
    </div>);
}
