function onClick() {
	const n = parseInt("123");
	const output = document.getElementById("output");

	let result = "";
	for(let i=1; i<=n; i+=2) {
		result += i;
		result += " ";
	}

	output.textContent = result;
}