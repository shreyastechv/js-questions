function onClick() {
	const num1 = parseInt("2");
	const num2 = parseInt("3");
	const num3 = parseInt("5");
	const output = document.getElementById("output");

	const sum = num1 + num2 + num3;
	const avg = sum/3;
	output.textContent = "Sum:" + sum + " Average: " + avg;
}