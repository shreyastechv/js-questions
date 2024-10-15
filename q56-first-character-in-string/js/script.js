function onClick() {
	const str = "chatgpt";
	const output = document.getElementById("output");

	const firstChar = str[0];

	output.textContent = "First character in string is " + firstChar;
}