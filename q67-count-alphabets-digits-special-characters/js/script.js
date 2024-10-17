function onClick() {
	const str = document.getElementById("str").value;
	const output = document.getElementById("output");

	let alphabetCount=0, numberCount=0, specialCharCount=0;
	for(let i=0;i<=str.length-1;i++){
		if(/[a-zA-Z]/.test(str[i])){
			alphabetCount++;
		}
		else if(/\d/.test(str[i])){
			numberCount++;
		}
		else{
			specialCharCount++;
		}
					
	}

	output.textContent = "Alphabet count = " + alphabetCount + ", Number count = " + numberCount + ", Special character count = " + specialCharCount;
}