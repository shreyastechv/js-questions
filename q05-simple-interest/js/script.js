function onClick() {
	const principal = parseInt("15000");
	const rate = parseFloat("12.5");
	const timeInYears = parseInt("5");
	const output = document.getElementById("output");

	const simpleInterest = (principal * rate * timeInYears) / 100;

	output.textContent = "Simple Interest: " + simpleInterest;
}