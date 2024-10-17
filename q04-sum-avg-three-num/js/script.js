function onClick() {
	const num1 = parseInt(document.getElementById("num1").value);
	const num2 = parseInt(document.getElementById("num2").value);
	const num3 = parseInt(document.getElementById("num3").value);
	const output = document.getElementById("output");

	const sum = num1 + num2 + num3;
	const avg = sum/3;
	output.textContent = "Sum:" + sum + " Average: " + avg;
}