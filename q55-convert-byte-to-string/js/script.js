function onClick() {
	const bytes = document.getElementById("bytes").value;
	const output = document.getElementById("output");

	const arr = bytes.split(" ");
	const str = String.fromCharCode(...arr);
	output.textContent = "The string is: " + str;
}
