function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	let sum = 0;
	for (let i=2; i<=num; i+=2) {
		sum += i;
	}
	output.textContent = "Sum of even natural numbers upto given number is " + sum;
}
