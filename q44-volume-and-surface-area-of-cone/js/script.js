function onClick() {
	const length = parseFloat("12");
	const radius = parseFloat("4");
	const height = parseFloat("13");
	const output = document.getElementById("output");

	const surfaceArea = Math.PI * radius * length + Math.PI * (radius ** 2);
	const volume = (1/3) * Math.PI * (radius ** 2) * height;
	const lateralSurfaceArea = Math.PI * radius * length;
	const result = `Surface area: ${surfaceArea}\nVolume: ${volume}\nLateral surface area: ${lateralSurfaceArea}.`

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}