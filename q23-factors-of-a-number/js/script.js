function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	factors = [];
	for (let i=1; i<Math.sqrt(num); i++) {
		if (num%i==0) {
			factors.push(i, num/i)
		}
	}

	output.textContent = `Factors of the number are ${factors}`;
}