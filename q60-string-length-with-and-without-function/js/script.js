function onClick() {
	const str = "matrimony";
	const output = document.getElementById("output");

	let strCopy = str;
	let length = 0;
	while (strCopy!="") {
		strCopy = strCopy.slice(0,-1);
		length++;
	}

	// Using length method
	/*
	length = strCopy.length;
	*/

	output.textContent = "Length of the string is " + length;
}
