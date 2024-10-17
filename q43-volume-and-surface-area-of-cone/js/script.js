function onClick() {
	const length = parseFloat(document.getElementById("length").value);
	const radius = parseFloat(document.getElementById("radius").value);
	const height = parseFloat(document.getElementById("height").value);
	const output = document.getElementById("output");

	const surfaceArea = Math.PI * radius * length + Math.PI * (radius ** 2);
	const volume = (1/3) * Math.PI * (radius ** 2) * height;
	const lateralSurfaceArea = Math.PI * radius * length;
	const result = `Surface area: ${surfaceArea}\nVolume: ${volume}\nLateral surface area: ${lateralSurfaceArea}.`

	output.setAttribute('style', 'white-space: pre;');
	output.textContent = result;
}