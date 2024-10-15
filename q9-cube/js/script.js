function onClick() {
	const num = parseFloat("13.2");
	const output = document.getElementById("output");

	output.textContent = "Cube: " + Math.pow(num, 3);
}