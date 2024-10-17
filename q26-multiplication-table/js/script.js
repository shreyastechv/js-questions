function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");
	output.textContent = "";

	for (let i=1; i<=10; i++) {
		var tag = document.createElement("p");
		var text = document.createTextNode(num + " x " + i + " = " + num*i);
		tag.appendChild(text);
		output.appendChild(tag);		
	}
}
