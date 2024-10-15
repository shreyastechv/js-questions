function onClick() {
	const str = "granddaughter";
	const ch = "d";
	const output = document.getElementById("output");

	let occurance = 0;
	for (let i=0; i<str.length; i++) {
		if (str[i] == ch) occurance++;
	}
	output.textContent = "Occurance: " + occurance;
}
