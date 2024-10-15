function nextAlphabet(ch) {
	const charCode = ch.charCodeAt(0);
	let nextCharCode;
	if (charCode == 90) {
		nextCharCode = 65;
	}
	else if (charCode == 122) {
		nextCharCode = 97;
	}
	else {
		nextCharCode = charCode + 1;
	}

	return String.fromCharCode(nextCharCode);
}

function onClick() {
	const str = "javascript"
	const output = document.getElementById("output");

	let newStr = "";
	const alphabetPattern = /[a-zA-Z]/;
	for(let i=0; i<str.length; i++) {
		if (alphabetPattern.test(str[i])) {
			newStr += nextAlphabet(str[i]);
		}
		else {
			newStr += str[i];
		}
	}

	output.textContent = "New string is "+ newStr;
}