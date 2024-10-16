function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	sumOfDigits = num.toString().split("").reduce((sum, n) => sum += parseInt(n), 0);

	output.textContent = `Sum of digits is ${sumOfDigits}.`;
}