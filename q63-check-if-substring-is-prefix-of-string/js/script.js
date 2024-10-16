function onClick() {
	const str = document.getElementById("str").value;
	const substr = document.getElementById("substr").value;
	const output = document.getElementById("output");

	if(substr == str.substring(0,substr.length)) {
		output.textContent = "It's prefix!";
	}
	else {
		output.textContent = "It's NOT prefix!";
	}
}
