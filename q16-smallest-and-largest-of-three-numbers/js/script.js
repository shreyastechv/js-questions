function onClick() {
	const num1 = parseFloat("50");
	const num2 = parseFloat("80");
	const num3 = parseFloat("80");
	const output = document.getElementById("output");

	const arr = [num1, num2, num3];
	arr.sort();
	const smallest = arr[0];
	const largest = arr[2];

	output.textContent = "Smallest number is " + smallest + " and Largest number is " + largest;
}