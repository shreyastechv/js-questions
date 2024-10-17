function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	const product = num.toString().replace("-","").split("").reduce((prod, n) => prod*parseInt(n), 1);
	output.textContent = "Product of Digits is " + product;
}