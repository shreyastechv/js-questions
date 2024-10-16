function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	let newStr="";
	for (let i=0; i<str.length; i++) {
		if (str[i] == str[i].toLowerCase()) {
			newStr += str[i].toUpperCase();
		}
		else {
			newStr += str[i].toLowerCase();
		}
	}

	output.textContent = "Case reversed string is " + newStr;
}