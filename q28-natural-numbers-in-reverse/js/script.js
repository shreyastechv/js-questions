function onClick() {
	const n = parseInt("123");
	const output = document.getElementById("output");

	for(let i=n; i>=1; i--) {
		var tag = document.createElement("p");
		var text = document.createTextNode(i);
		tag.appendChild(text);
		output.appendChild(tag);
	}
}