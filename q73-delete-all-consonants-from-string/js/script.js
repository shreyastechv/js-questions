function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	let newStr = "";
	const notConsonantPattern = /[^a-zA-Z]|[aeiouAEIOU]/;
	for (let i=0; i<str.length; i++) {
		if (notConsonantPattern.test(str[i])) {
			newStr += str[i];
		}
	}

	output.textContent = `New string is [${newStr}].`;
}