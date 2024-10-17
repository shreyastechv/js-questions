function onClick() {
	const units = parseInt(document.getElementById("units").value);
	const output = document.getElementById("output");

	let copyUnits = units;
	let charge = 0;
	// Upto 50 units
	if (copyUnits >= 50) {
		charge += 50 * 2.6;
		copyUnits -= 50;
	} else {
		charge += copyUnits * 2.6;
		copyUnits = 0;
	}

	// Upto 100 units
	if (copyUnits >= 50) {
		charge += 50 * 3.25;
		copyUnits -= 50;
	} else {
		charge += copyUnits * 3.25;
		copyUnits = 0;
	}

	// Upto 200 units
	if (copyUnits >= 100) {
		charge += 100 * 5.65;
		copyUnits -= 100;
	} else {
		charge += copyUnits * 5.65;
		copyUnits = 0;
	}

	// Above 200 units
	charge += copyUnits * 7.25;

	// Above 700 units
	if (units > 700) {
		charge += charge * (0.5/100);
	}

	output.textContent = `Electricity bill is ${charge} rupees.`;
}
