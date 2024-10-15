function onClick() {
	const num1 = document.getElementById("num1").value;
	const num2 = document.getElementById("num2").value;
	const output = document.getElementById("output");

	let sum = parseInt(num1) + parseInt(num2);

	output.textContent = "Sum: " + sum;
}