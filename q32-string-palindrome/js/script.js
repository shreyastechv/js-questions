function onClick() {
	const str = document.getElementById("string").value;
	const output = document.getElementById("output");

	const strNew = str.trim().toLowerCase();
	const strRev = strNew.split('').reverse().join('');
	if (strNew == strRev) {
		output.textContent = "It is a palindrome";
	}
	else {
		output.textContent = "It is NOT a palindrome";
	}
}
