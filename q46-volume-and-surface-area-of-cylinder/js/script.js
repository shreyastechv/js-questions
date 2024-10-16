function onClick() {
	const radius = parseFloat(document.getElementById("radius").value);
	const height = parseFloat(document.getElementById("height").value);
	const output = document.getElementById("output");

	const surfaceArea = 2 * Math.PI * radius * (radius * height);
	const volume = Math.PI * (radius ** 2) * height;
	const lateralSurfaceArea = 2 * Math.PI * radius * height;
	const topOrBottomSurfaceArea = Math.PI * (radius ** 2);
	const result = `Total surface area: ${surfaceArea}\nVolume: ${volume}\nLateral surface area: ${lateralSurfaceArea}\nTop Or Bottom Surface Area: ${topOrBottomSurfaceArea}.`;

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}