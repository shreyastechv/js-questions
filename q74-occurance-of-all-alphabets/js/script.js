function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	const occurrence = {};
	for (let i=0; i<str.length; i++) {
		if (occurrence.hasOwnProperty(str[i])) {
			occurrence[str[i]]++;
		}
		else {
			occurrence[str[i]] = 1;
		}
	}

	let result = "Occurrences are";
	let maxOccurrence = "";
	for (let alphabet in occurrence) {
		result += ` ${alphabet} = ${occurrence[alphabet]},`;
		if (maxOccurrence == "" || occurrence[maxOccurrence] < occurrence[alphabet]) {
			maxOccurrence = alphabet;
		}
	}

	output.textContent = `${result} and maximum occurred alphabet is ${maxOccurrence}`;
}