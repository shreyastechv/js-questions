function onClick() {
	const str1 = document.getElementById("str1").value;
	const str2 = document.getElementById("str2").value;
	const output = document.getElementById("output");

	const newStr = str1 + str2;

	output.textContent = "Concatenated string is: " + newStr;
}