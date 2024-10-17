function onClick() {
	const choice = parseInt(document.getElementById("choice").value);
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const menu = document.getElementById("menu");
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
		case 5:
			menu.style.display = "none";
			result = "Exiting...";
			break;
		default:
			result = "Invalid operation";
	}

	output.textContent = result;
}