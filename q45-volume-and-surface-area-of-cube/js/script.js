function onClick() {
	const length = parseFloat("12");
	const output = document.getElementById("output");

	const surfaceArea = 6 * (length ** 2);
	const volume = length ** 3;
	const lateralSurfaceArea = 4 * (length ** 2);
	const result = `Surface area: ${surfaceArea}\nVolume: ${volume}\nLateral surface area: ${lateralSurfaceArea}.`

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}