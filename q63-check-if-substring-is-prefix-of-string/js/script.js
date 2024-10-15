function onClick() {
	const str = "Harry Potter";
	const substr = "Harry";
	const output = document.getElementById("output");

	if(substr == str.substring(0,substr.length)) {
		output.textContent = "It's prefix!";
	}
	else {
		output.textContent = "It's NOT prefix!";
	}
}
