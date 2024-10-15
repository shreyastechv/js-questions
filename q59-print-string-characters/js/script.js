function onClick() {
	const str = "tomorrow";
	const output = document.getElementById("output");

	for(let i=0; i<str.length; i++) {
		var tag = document.createElement("p");
		var text = document.createTextNode(str[i]);
		tag.appendChild(text);
		output.appendChild(tag);
	}
}