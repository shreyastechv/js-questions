function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	for(let i=0; i<str.length; i++) {
		var tag = document.createElement("p");
		var text = document.createTextNode(str[i]);
		tag.appendChild(text);
		output.appendChild(tag);
	}
}