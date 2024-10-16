function onClick() {
	const str = document.getElementById("str").value;
	const substr = document.getElementById("substr").value;
	const anotherStr = document.getElementById("anotherStr").value;
	const output = document.getElementById("output");

	newStr = str.replace(substr, anotherStr);
	output.textContent = "New string is: " + newStr;
}
