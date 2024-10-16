function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	const arr = [];
	if (num >= 0) arr.push(0);
	if (num >= 1) arr.push(1);

	console.log(arr);
	while (arr[arr.length-1] < num) {
		console.log("Here I am");
		arr.push(arr[arr.length-1] + arr[arr.length-2]);
	}

	output.textContent = `Fibonacci series: ${arr}`;
}