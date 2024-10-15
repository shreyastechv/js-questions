function onClick() {
	const str = "abcefg";
	const output = document.getElementById("output");

	let charCode = str[0].charCodeAt(0);
	let missing = false;
	for(let i=1; i<str.length; i++) {
		charCode++;
		if(str[i].charCodeAt(0) != charCode) {
			output.textContent = "Missing letter is " + String.fromCharCode(charCode);
			missing = true;
			break;
		}
	}

	if (!missing) {
		output.textContent = "There is no missing letter!";
	}
}