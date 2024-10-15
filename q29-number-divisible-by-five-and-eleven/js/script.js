function onClick() {
	const n = parseInt("1234");
	const output = document.getElementById("output");

	const arr = [];
	for (let i=1; i<=n; i++) {
		if (i%5==0 && i%11==0) {
			arr.push(i);
		}
	}

	output.textContent = arr;
}
