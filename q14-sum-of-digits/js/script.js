function onClick() {
	const num = parseInt("1815");
	const output = document.getElementById("output");

	console.log(num.toString().split("").reduce((sum, n) => sum += parseInt(n), 0));

	output.textContent = "";
}