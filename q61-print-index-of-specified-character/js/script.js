function onClick() {
	const str = document.getElementById("str").value;
	const ch = document.getElementById("ch").value;
	const output = document.getElementById("output");

	const index = str.split("").indexOf(ch);
	if (index != -1) {
		output.textContent = "Index of character is " + index;
	}
	else {
		output.textContent = "The character is NOT found!";
	}
}