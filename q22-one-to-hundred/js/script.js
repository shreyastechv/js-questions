function onClick() {
	const output = document.getElementById("output");

	for(let i=1; i<=100; i++) {
		var tag = document.createElement("p");
		var text = document.createTextNode(i);
		tag.appendChild(text);
		output.appendChild(tag);
	}
}