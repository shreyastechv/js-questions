function onClick() {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const num3 = parseFloat(document.getElementById("num3").value);
	const output = document.getElementById("output");

	const arr = [num1, num2, num3];
	arr.sort();
	const smallest = arr[0];
	const largest = arr[2];

	output.textContent = "Smallest number is " + smallest + " and Largest number is " + largest;
}