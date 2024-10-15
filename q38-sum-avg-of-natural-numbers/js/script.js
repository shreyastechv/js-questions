function onClick() {
	const num = parseInt("25");
	const output = document.getElementById("output");

	const sum = num * (num+1) / 2;
	const avg = sum/num;
	output.textContent = "Sum:" + sum + " Average: " + avg;
}
