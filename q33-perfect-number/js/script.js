function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	properDivisors = [1];
	for (let i=2; i<Math.sqrt(num); i++) {
		if (num%i==0) {
			properDivisors.push(i, num/i)
		}
	}
	const sumOfProperDivisors = properDivisors.reduce((sum,n) => sum += n, 0);
	if (sumOfProperDivisors === num) {
		output.textContent = "Yup, it's a perfect number!";
	}
	else {
		output.textContent = "Hell no! It's not a perfect number.";
	}
}
