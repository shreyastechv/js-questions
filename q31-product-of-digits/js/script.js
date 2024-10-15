function onClick() {
	const num = parseInt("12342");
	const output = document.getElementById("output");

	const product = num.toString().split("").reduce((prod, n) => prod*parseInt(n), 1);
	output.textContent = "Product of Digits is " + product;
}