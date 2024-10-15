function onClick() {
	const str = "Hello, World!";
	const substr = "World";
	const anotherStr = "Life"
	const output = document.getElementById("output");

	newStr = str.replace(substr, anotherStr);
	output.textContent = "New string is: " + newStr;
}
