function onClick() {
	const basicSalary = parseInt("18500");
	const output = document.getElementById("output");

	let hra = 0;
	let da = 0;
	if (basicSalary <= 10000) {
		hra = basicSalary * 0.08;
		da = basicSalary * 0.10;
	}
	else if (basicSalary <= 20000) {
		hra = basicSalary * 0.16;
		da = basicSalary * 0.20;
	}
	else {
		hra = basicSalary * 0.24;
		da = basicSalary * 0.30;
	}
	const grossSalary = basicSalary + hra + da;

	output.textContent = `Gross salary  is ${grossSalary}`;
}