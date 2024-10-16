function onClick() {
	const num = document.getElementById("num").value;
	const output = document.getElementById("output");

	const length = num.length;
	const firstDigit = parseInt(num[0]);
	const lastDigit = parseInt(num[length-1]);

	output.textContent = "First digit is " + firstDigit + " and the Last digit is " + lastDigit;
}