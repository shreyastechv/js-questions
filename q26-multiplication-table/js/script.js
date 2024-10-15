function onClick() {
	const num = parseInt("13");
	const output = document.getElementById("output");

	for (let i=1; i<=10; i++) {
		var tag = document.createElement("p");
		var text = document.createTextNode(num + " x " + i + " = " + num*i);
		tag.appendChild(text);
		output.appendChild(tag);		
	}
}
