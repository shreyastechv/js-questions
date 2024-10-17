function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	const vowels = ['a','e','i','o','u','A','E','I','O','U'];
	let arr = [];
	let newStr = "";
	for(let i=0; i<str.length; i++) {
		if (vowels.includes(str[i])) {
			arr.push(str[i]);
		}
	}

	for(let i=0; i<str.length; i++) {
		if (vowels.includes(str[i])) {
			newStr += arr.pop();
		}
		else {
			newStr += str[i];
		}
	}

	output.textContent = "New String is " + newStr;
}