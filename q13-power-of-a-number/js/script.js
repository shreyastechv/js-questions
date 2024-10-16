function onClick() {
	const num = parseFloat(document.getElementById("num").value);
	const exponent = parseFloat(document.getElementById("exponent").value);
	const output = document.getElementById("output");

	const power = Math.pow(num, exponent).toFixed(3);

	output.textContent = "Power = " + power;
}