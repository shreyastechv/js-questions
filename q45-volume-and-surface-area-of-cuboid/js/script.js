function onClick() {
	const length = parseFloat(document.getElementById("length").value);
	const width = parseFloat(document.getElementById("width").value);
	const height = parseFloat(document.getElementById("height").value);
	const output = document.getElementById("output");

	const surfaceArea = 2 * (length * width + width * height + height * length);
	const volume = length * width * height;
	const lateralSurfaceArea = 2 * height * (length + width);
	const result = `Total surface area: ${surfaceArea}\nVolume: ${volume}\nLateral surface area: ${lateralSurfaceArea}.`

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}