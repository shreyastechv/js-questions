function onClick(option) {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const output = document.getElementById("output");

	let result = "";
	switch(option) {
		case 1:
			result = `Sum = ${num1+num2}`;
			break;
		case 2:
			result = `Difference = ${num1-num2}`;
			break;
		case 3:
			result = `Product = ${num1*num2}`;
			break;
		case 4:
			result = `Quotient = ${num1/num2}`;
			break;
		default:
			result = "Invalid choice!";
	}

	output.textContent = result;
}