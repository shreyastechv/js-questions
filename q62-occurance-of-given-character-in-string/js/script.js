function onClick() {
	const str = document.getElementById("str").value;
	const ch = document.getElementById("ch").value;
	const output = document.getElementById("output");

	let occurance = 0;
	for (let i=0; i<str.length; i++) {
		if (str[i] == ch) occurance++;
	}
	output.textContent = "Occurance: " + occurance;
}
