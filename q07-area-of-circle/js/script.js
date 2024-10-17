function onClick() {
	const radius = parseFloat(document.getElementById("radius"));
	const output = document.getElementById("output");

	const area = Math.PI * Math.pow(radius, 2);

	output.textContent = "Area of circle: " + area;
}