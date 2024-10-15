function onClick() {
	const str = "downloads";
	const ch = "n";
	const output = document.getElementById("output");

	const index = str.split("").indexOf(ch);
	if (index != -1) {
		output.textContent = "Index of character is " + index;
	}
	else {
		output.textContent = "The character is NOT found!";
	}
}