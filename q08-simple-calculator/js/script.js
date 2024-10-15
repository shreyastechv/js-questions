function onClick() {
	const choice = parseInt("4");
	const num1 = parseFloat("13.5");
	const num2 = parseFloat("2.3");
	let result = 0.0;
	const output = document.getElementById("output");

	switch(choice) {
		case 1:
			result = num1 + num2;
			break;
		case 2:
			result = num1 - num2;
			break;
		case 3:
			result = (num1 * num2).toFixed(2);
			break;
		case 4:
			result = (num1 / num2).toFixed(2);
			break;
		default:
			result = "Invalid operation";
	}

	output.textContent = result;
}