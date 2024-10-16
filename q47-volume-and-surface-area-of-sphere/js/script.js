function onClick() {
	const radius = parseFloat("12");
	const output = document.getElementById("output");

	const surfaceArea = 4 * Math.PI * (radius ** 2);
	const volume = 4 * Math.PI * (radius ** 3);
	const result = `Surface area: ${surfaceArea}\nVolume: ${volume}.`;

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}