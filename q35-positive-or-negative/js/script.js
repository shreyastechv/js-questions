function onClick() {
	const num = parseFloat(document.getElementById("num").value);
	const output = document.getElementById("output");

	if (num > 0) {
		output.textContent = "Be positive!";
	}
	else if (num < 0) {
		output.textContent = "It's a negative!";
	}
	else {
		output.textContent = "It's zero";
	}
}
