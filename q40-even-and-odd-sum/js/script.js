function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	const totalSum = num * (num+1) / 2;
	let evenSum = 0;
	for (let i=2; i<=num; i+=2) {
		evenSum += i;
	}
	oddSum = totalSum - evenSum;
	output.textContent = "Even sum: " + evenSum + " and Odd sum: " + oddSum;
}
