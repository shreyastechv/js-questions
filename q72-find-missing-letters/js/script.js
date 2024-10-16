function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	let charCode = str[0].charCodeAt(0);
	let missingStr = "";
	for(let i=1; i<str.length; i++) {
		charCode++;
		if(str[i].charCodeAt(0) != charCode) {
			missingStr += String.fromCharCode(charCode);
			i--;
		}
	}

	if (missingStr == "") {
		output.textContent = "There is no missing letter!";
	}
	else {
		output.textContent = `Missing letters are ${missingStr}.`;
	}
}