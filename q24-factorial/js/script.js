function onClick() {
	const num = parseInt("12");
	const output = document.getElementById("output");

	let fact = 1;
	for(let i=1; i<=num; i++) {
		fact *= i;
	}

	output.textContent = "Factorial is " + fact;
}