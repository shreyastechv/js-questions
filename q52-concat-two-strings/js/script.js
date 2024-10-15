function onClick() {
	const str1 = "Hello, ";
	const str2 = "World!";
	const output = document.getElementById("output");

	const newStr = str1 + str2;

	output.textContent = "Concatenated string is: " + newStr;
}