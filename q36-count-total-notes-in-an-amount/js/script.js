function onClick() {
	const amount = parseInt(document.getElementById("amount").value);
	const output = document.getElementById("output");

	let copyAmount = amount;
	const notes = [2000, 500, 200, 100, 50, 20, 10];
	let result = "";

	for (let note of notes) {
		console.log(note);
		let count = Math.floor(copyAmount/note);
		copyAmount = copyAmount % note;
		result += `Count of ${note} notes is ${count}. `;
	}

	output.textContent = result;
}