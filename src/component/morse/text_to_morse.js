import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const alphabet = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
  'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
  'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
  'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
  'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
  'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..', ' ': '/',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----',
}

function translateMorse(textInput) {
  return textInput.split('').map(function (e) {
    return alphabet[e.toLowerCase()] || '';
  }).join(' ').replace(/ +/g, ' ');
}


class MorseTranslation extends React.Component {
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
      <div id="text_to_morse" class="form-group purple-border">

        <textarea
          class="form-control"
          rows="5"
          cols="25"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={'Input plain text'}
        />
        <br />
        <textarea
          class="form-control"
          rows="5"
          ols="25"
          value={this.state.morse}
          readOnly={true}
          placeholder={'Output morse code'}
        />
      </div>
    );
  }
}

export default MorseTranslation;                                   