function onClick() {
	const principal = parseInt(document.getElementById("principal").value);
	const rate = parseFloat(document.getElementById("rate").value);
	const timeInYears = parseInt(document.getElementById("time").value);
	const output = document.getElementById("output");

	const simpleInterest = (principal * rate * timeInYears) / 100;

	output.textContent = "Simple Interest: " + simpleInterest;
}