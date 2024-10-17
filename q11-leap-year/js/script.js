function onClick() {
	const year = parseInt(document.getElementById("year").value);
	const output = document.getElementById("output");

	if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
		output.textContent = "It is a leap year";
	}
	else {
		output.textContent = "It is NOT a leap year";
	}
}