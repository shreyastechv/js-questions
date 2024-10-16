function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	if (num % 2 == 0) {
		output.textContent = "Even number.";
	}
	else {
		output.textContent = "Odd number.";
	}
}