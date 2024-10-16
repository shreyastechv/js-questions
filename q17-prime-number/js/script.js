function isPrime(num) {
	if (num == 1) return false;
	if (num == 2) return true;
	if (num % 2 == 0) return false;

	for(let i=3; i<num; i+=2) {
		if(num % i == 0) return false;
	}
	return true;
}

function onClick() {
	const num = parseInt(document.getElementById("num").value);
	const output = document.getElementById("output");

	if(isPrime(num)) {
		output.textContent = "It is PRIME";
	}
	else {
		output.textContent = "It is NOT prime";
	}
}