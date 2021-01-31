const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

var special = [
  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "\"", "\\", ".", ",", "'", '"'
];


export const textToCypher = (text, shift, multi) => {
  const textSplited = text.split('')
  console.log("ttc")
  return textSplited
    .map(char => {

      for (var index = 0; index < special.length; index++) {
        if (char == special[index]) {
          return char;
        }
      }

      var letter = '';
      if (char === char.toUpperCase()) {
        char = char.toLowerCase();
        const position = alphabet.indexOf(char)

        letter = position >= 0 ? alphabet[(position*multi + shift)%26] : ' '
        return letter.toUpperCase();
      } else {
        const position = alphabet.indexOf(char)

        letter = position >= 0 ? alphabet[(position*multi + shift)%26] : ' '
        return letter;
      }

    })
    .join('')
}

// unused
export const cypherToText = (text, shift, multi) => {
  const textSplited = text.split('')
  console.log("ctt")
  return textSplited
    .map(char => {

      for (var index = 0; index < special.length; index++) {
        if (char == special[index]) {
          return char;
        }
      }

      var letter = '';
      if (char === char.toUpperCase()) {
        char = char.toLowerCase();
        const position = alphabet.indexOf(char)

        letter = position >= 0 ? alphabet[((position*multi - shift)+26)%26] : ' '
        return letter.toUpperCase();
      } else {
        const position = alphabet.indexOf(char)

        letter = position >= 0 ? alphabet[((position*multi - shift)+26)%26] : ' '
        return letter;
      }

    })
    .join('')
}
