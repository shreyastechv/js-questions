function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	let numCopy = num;
	let count = 0;
	while (numCopy != 0) {
		numCopy = Math.floor(numCopy/10);
		count++;
	}
	output.textContent = "Count of digits in given number is " + count;
}
