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
	for(let i=0; i<str.length; i++) {
		newStr += nextAlphabet(str[i]);
	}

	output.textContent = "New string is "+ newStr;
}