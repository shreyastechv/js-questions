function increment(num) {
	if(num<=1) return 1;
	return increment(num-1) + " " + num.toString();
}

function onClick() {
	const output = document.getElementById("output");

	const result = increment(100);

	output.textContent = result;
}