function onClick() {
	const n = parseInt(document.getElementById("n").value);
	const output = document.getElementById("output");

	const arr = [];
	for (let i=2; i<=n; i+=2) {
		if (i%2 == 0) {
			arr.push(i);
		}
	}

	output.textContent = arr;
}
