function isPalindrome(str) {
	const strTrimmed = str.trim().toLowerCase();
	const strRev = strTrimmed.split('').reverse().join('');
	if (strTrimmed == strRev) {
		return true;
	}
	return false;
}

function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	const arr = str.split(" ");
	let newStr = "";
	for (let i=0; i<arr.length; i++) {
		if (isPalindrome(arr[i])) {
			newStr += arr[i].split("").reduce((star, n) => star+="*", "");
		}
		else {
			newStr += arr[i];
		}
		newStr += " ";
	}

	output.textContent = `New string is [${newStr}].`;
}