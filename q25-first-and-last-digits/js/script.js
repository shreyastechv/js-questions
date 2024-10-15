function onClick() {
	const num = "1234";
	const output = document.getElementById("output");

	const length = num.length;
	const firstDigit = parseInt(num[0]);
	const lastDigit = parseInt(num[length-1]);

	output.textContent = "First digit is " + firstDigit + " and the Last digit is " + lastDigit;
}