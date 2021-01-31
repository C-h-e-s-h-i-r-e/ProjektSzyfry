import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

import { CypherText } from './szyfr'
import { PlainText } from './text'
import { Shift } from './przesuniecie'
import { Shift_Multi } from './mnozenie'

import { textToCypher, cypherToText } from './szyfrowanie'

function Caesar() {
  const [cypherText, setCypherText] = useState('')
  const [plainText, setPlainText] = useState('')
  const [shift, setShift] = useState(0)
  const [multi, setMulti] = useState(0)

  const onChangeCypherText = cypherText => {
    setCypherText(cypherText)
    setPlainText(cypherToText(cypherText, shift, multi))
  }

  const onChangePlainText = plainText => {
    setPlainText(plainText)
    setCypherText(textToCypher(plainText, shift, multi))
  }

  const onChangeShift = shift => {
    setShift(shift)
    setCypherText(cypherToText(plainText, shift, multi))
  }

  const onChangeMulti = multi => {
    setMulti(multi)
    setCypherText(cypherToText(plainText, shift, multi))
  }

  return (
    <div className="Caesar">
      <h1 class="sixth">Affine Cipher</h1>
      <li>
                <Link className="link" to="/caesar">Affine Cipher Wiki</Link>
              </li>
      <Paper elevation={6}>
        <Box p={3}>
          <Grid container justify="center" spacing={40}>
            <Grid item xs={12}>
              f(x) =&nbsp; 
              <Shift onChange={onChangeShift} />
              &nbsp;+&nbsp;  
              <Shift_Multi onChange={onChangeMulti} />
              &nbsp;*x
            </Grid>
            <Grid item xs={12}>

              <Grid container justify="center" spacing={80}>
                <Grid item>
                  <h2 class="second"><span>Plain</span></h2>
                  <PlainText value={plainText} onChange={onChangePlainText} shift={shift} multi={multi} />
                </Grid>
                <Grid item>
                  <h2 class="second"><span>Cypher</span></h2>
                  <CypherText value={cypherText} onChange={onChangeCypherText} shift={shift} multi={multi}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  )
}

export default Caesar;