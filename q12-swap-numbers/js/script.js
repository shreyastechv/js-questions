function onClick() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	const output = document.getElementById("output");

	let tmp = num1;
	num1 = num2;
	num2 = tmp;

	output.textContent = "First number is now " + num1 + " and Second number is " + num2;
}