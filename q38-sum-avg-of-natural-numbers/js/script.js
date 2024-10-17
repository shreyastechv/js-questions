function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	const sum = num * (num+1) / 2;
	const avg = sum/num;
	output.textContent = "Sum:" + sum + " Average: " + avg;
}
