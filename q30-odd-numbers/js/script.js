function onClick() {
	const n = parseInt(document.getElementById("n").value);
	const output = document.getElementById("output");

	let result = "";
	for(let i=1; i<=n; i+=2) {
		result += i;
		result += " ";
	}

	output.textContent = result;
}