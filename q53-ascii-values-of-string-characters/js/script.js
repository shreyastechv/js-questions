function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	result = "";
	for (let i=0; i<str.length; i++) {
		result += str[i] + ": " + str[i].charCodeAt(0) + ", ";
	}

	output.textContent = result	;
}