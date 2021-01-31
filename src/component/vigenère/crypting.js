function crypt(input, key) {
	let output = '';
	for (let i = 0, j = 0; i < input.length; i++) {
		const c = input.charCodeAt(i);
		if (isUppercase(c)) {
			output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
			j++;
		} else if (isLowercase(c)) {
			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}

export function doCrypt(phraseInput, keyInput, decrypt) {
	if (keyInput.length == 0) {
		return '';
	}

	let key = filterKey(keyInput);
	if (key.length == 0) {
		return '';
	}
	if (decrypt) {
		for (let i = 0; i < key.length; i++) {
			key[i] = (26 - key[i]) % 26;
		}
	}
	return crypt(phraseInput, key);
}

function filterKey(key) {
	var result = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (isLetter(c))
			result.push((c - 65) % 32);
	}
	return result;
}

function isLetter(c) {
	return isUppercase(c) || isLowercase(c);
}

function isUppercase(c) {
	return 65 <= c && c <= 90;
}

function isLowercase(c) {
	return 97 <= c && c <= 122;
}