function onClick() {
	const principal = parseInt(document.getElementById("principal").value);
	const rate = parseFloat(document.getElementById("rate").value);
	const timeInYears = parseInt(document.getElementById("time").value);
	const output = document.getElementById("output");

	const growthFactor = 1 + (rate/100);
	const compoundInterest = principal * ((growthFactor ** timeInYears) - 1);

	output.textContent = "Compound Interest: " + compoundInterest.toFixed(4);
}
