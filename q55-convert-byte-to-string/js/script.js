function onClick() {
	const arr = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
	const output = document.getElementById("output");

	const str = String.fromCharCode(...arr);
	output.textContent = "The string is: " + str;
}
