function onClick() {
	const num = parseInt("12321");
	const output = document.getElementById("output");

	let copyNum = num;
	let revNum = 0;
	for(let i=num.toString().length-1; i>=0; i--) {
		revNum += (copyNum % 10) * Math.pow(10, i);
		copyNum = Math.floor(copyNum / 10);
		console.log(revNum, copyNum);
	}

	if (revNum === num) {
		output.textContent = "It's a palindrome!";
	}
	else {
		output.textContent = "It's NOT a palindrome!";
	}
}
