function onClick() {
	const str = "chatgpt";
	const output = document.getElementById("output");

	if (str.length % 2 != 0) {
		const middleChar = str[(str.length-1)/2];
		output.textContent = "Middle character in string is " + middleChar;
	}
	else {
		const approxMiddleIndex = (str.length/2) - 1;
		const middleChars = str.slice(approxMiddleIndex, approxMiddleIndex+2);
		output.textContent = "There is no perfect middle character since number of characters is even. Two middle characters are " + middleChars;
	}
}