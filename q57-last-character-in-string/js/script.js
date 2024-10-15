function onClick() {
	const str = "chatgpt";
	const output = document.getElementById("output");

	const lastChar = str[str.length-1];

	output.textContent = "Last character in string is " + lastChar;
}