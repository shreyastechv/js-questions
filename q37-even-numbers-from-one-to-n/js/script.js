function onClick() {
	const n = parseInt("26");
	const output = document.getElementById("output");

	const arr = [];
	for (let i=2; i<=n; i+=2) {
		if (i%2 == 0) {
			arr.push(i);
		}
	}

	output.textContent = arr;
}
