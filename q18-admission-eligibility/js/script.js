function onClick() {
	const maths = parseInt(document.getElementById("maths").value);
	const physics = parseInt(document.getElementById("physics").value);
	const chemistry = parseInt(document.getElementById("chemistry").value);
	const output = document.getElementById("output");

	total = maths + physics + chemistry;
	totalMathsPhysics = maths + physics;
	if (maths>=65 && physics>=55 && chemistry>=50 && total>=190 || (totalMathsPhysics>=140)) {
		output.textContent = "The candidate is eligible";
	}
	else {
		output.textContent = "The candidate is NOT eligible";
	}
}