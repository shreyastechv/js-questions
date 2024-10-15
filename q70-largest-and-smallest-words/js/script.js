function onClick() {
	const str = "js is the best programming language in the world";
	const output = document.getElementById("output");

	let smallest = "", largest = "";
	const arr = str.split(" ");
	for(let i=0; i<arr.length; i++) {
		if(smallest.length == 0 || smallest.length > arr[i].length) {
			smallest = arr[i];
		}

		if(largest.length < arr[i].length) {
			largest = arr[i];
		}
	}

	output.textContent = "Smallest word is [" + smallest + "] and Largest word is [" + largest + "]";
}