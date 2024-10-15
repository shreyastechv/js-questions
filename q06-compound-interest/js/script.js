function onClick() {
	const principal = parseInt("15000");
	const rate = parseFloat("12.5");
	const timeInYears = parseInt("5");
	const output = document.getElementById("output");

	const growthFactor = 1 + (rate/100);
	const compoundInterest = principal * ((growthFactor ** timeInYears) - 1);

	output.textContent = "Compound Interest: " + compoundInterest.toFixed(4);
}
