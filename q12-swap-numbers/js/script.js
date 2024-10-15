function onClick() {
	let num1 = parseFloat("13.5");
	let num2 = parseFloat("2.1");
	const output = document.getElementById("output");

	let tmp = num1;
	num1 = num2;
	num2 = tmp;

	output.textContent = "First number is now " + num1 + " and Second number is " + num2;
}