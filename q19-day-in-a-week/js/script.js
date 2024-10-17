function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	if(num < 1 || num > 7) {
		output.textContent = "Invalid day";
	}
	else {
		const day = days[num-1];
		output.textContent = "The equivalent day is " + day;
	}
}