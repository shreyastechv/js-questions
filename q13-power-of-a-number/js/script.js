function onClick() {
	const num = parseFloat("13.2");
	const exponent = parseInt("5");
	const output = document.getElementById("output");

	const power = Math.pow(num, exponent).toFixed(3);

	output.textContent = "Power = " + power;
}