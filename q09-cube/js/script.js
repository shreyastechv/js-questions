function onClick() {
	const num = parseFloat(document.getElementById("num").value);
	const output = document.getElementById("output");

	output.textContent = "Cube: " + Math.pow(num, 3);
}