function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	const firstChar = str[0];

	output.textContent = "First character in string is " + firstChar;
}