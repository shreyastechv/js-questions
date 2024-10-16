function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	let flag = true;
	const arr = [];
	const openBracketPattern = /[\(\{\[]/;
	const closingBracketPattern = /[\)\}\]]/;
	const map = new Map();
	map.set(']','[');
	map.set(')','(');
	map.set('}','{');

	for (let i=0; i<str.length; i++) {
		if (openBracketPattern.test(str[i])) {
			arr.push(str[i]);
		}

		if (closingBracketPattern.test(str[i])) {

			if (arr.length == 0) {
				flag = false;
				break;
			}

			let top = arr.pop();
			if (top != map.get(str[i])) {
				flag = false;
				break;
			}
		}
	}

	if (flag && arr.length == 0) {
		output.textContent = "String is Valid!";
	}
	else {
		output.textContent = "String is Invalid!";
	}
}