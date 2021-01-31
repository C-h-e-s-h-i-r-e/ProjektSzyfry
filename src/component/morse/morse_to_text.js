import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const alphabet = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " "
}

function translateMorse(textInput) {
  return textInput.split(' ').map(function (e) {
    return alphabet[e.toLowerCase()] || '';
  }).join('').replace(/ +/g, ' ');
}


class MorseTranslationtoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', morse: '' };

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({
      value: event.target.value,
      morse: translateMorse(event.target.value)
    });
  }


  render() {
    return (
      <div id="morse_to_text" class="form-group purple-border">

        <textarea
          class="form-control"
          rows="5"
          cols="25"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={'Input morse code'}
        />
        <br />
        <textarea
          class="form-control"
          rows="5"
          cols="25"
          value={this.state.morse}
          readOnly={true}
          placeholder={'Output plain text'}
        />
      </div>
    );
  }
}

export default MorseTranslationtoText;