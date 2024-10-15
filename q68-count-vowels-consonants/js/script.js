function onClick() {
	const str = "beauTIful";
	const output = document.getElementById("output");

	let vowelCount=0, consonantCount=0;
	const vowelPattern = /[aeiouAEIOU]/;
	const alphabetPattern = /[a-zA-Z]/;
	for(let i=0; i<=str.length-1; i++){
		if(vowelPattern.test(str[i])){
			vowelCount++;
		}
		else if(alphabetPattern.test(str[i])){
			consonantCount++;
		}			
	}

	output.textContent = "Vowels count = " + vowelCount + ", Consonant count = " + consonantCount;
}