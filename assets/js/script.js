// Assignment Code
var generateBtn = document.querySelector("#generate");
var pLength = 0;
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	if (!password) password = "";
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}
var password = "";
var specialChars = " !\"#$&%'()*+,-./:;<=>?@[]-`{|}~";
var lcaseString = "abcdefghijklmnopqrstuvwxyz";
var ucaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
function generatePassword() {
	var c = 0;
	password = "";
	var characterString = "";
	//1. password length
	var pLengthStr = prompt(
		"Please enter length of the new password. Length should be between 8 to 128 characters"
	);
	if (isNaN(pLengthStr)) {
		alert("Invalid password length, Please try again.");
		generatePassword();
	}
	pLength = Number(pLengthStr);

	if (pLength > 128 || pLength < 8) {
		alert("Invalid password length! Password must 8-128 characters long");
		var tryagain = confirm(
			"Please select atleast one criteria.Do you want to try again?"
		);
		if (tryagain) generatePassword();
		else return false;
	}
	//2. Character type -lowercase
	var lcase = confirm(
		"Do you want to include lowercase characters in your password?"
	);
	if (lcase) {
		c++;
		characterString += lcaseString;
	}
	console.log(lcase);

	//3. Character type -uppercase
	var ucase = confirm(
		"Do you want to include uppercase characters in your password?"
	);
	if (ucase) {
		c++;
		characterString += ucaseString;
	}
	console.log(ucase);

	//4. Character type -numeric
	var numeric = confirm(
		"Do you want to include Numeric characters in your password?"
	);
	console.log(numeric);
	if (numeric) {
		c++;
		characterString += numbers;
	}
	//5. Character type -numeric
	var special = confirm(
		"Do you want to include Special characters in your password?"
	);
	console.log(special);
	if (special) {
		c++;
		characterString += specialChars;
	}
	if (c === 0) {
		var tryagain = confirm(
			"Please select atleast one criteria.Do you want to try again?"
		);
		if (tryagain) generatePassword();
		else return false;
	}

	var limit = parseInt(pLength / c);
	console.log(pLength + " " + c + " " + limit);

	//random lcase length
	if (lcase) {
		getCharacters(limit, lcaseString);
	}
	if (ucase) {
		getCharacters(limit, ucaseString);
	}
	if (numeric) {
		getCharacters(limit, numbers);
	}

	if (special) {
		console.log(specialChars);
		getCharacters(limit, specialChars);
	}
	var remaining = pLength - password.length;
	for (var i = 0; i < remaining; i++) {
		var index = Math.floor(Math.random() * characterString.length);
		console.log("index = " + index);
		password += characterString.charAt(index);
	}
	console.log("password so far length" + password.length);
	console.log("length remaining = " + remaining);
	console.log("final password = " + password);
	password = shuffleStringChars(password);
	return password;
}

function getLowerCaseLetters(divider) {
	var lcaseLength = Math.floor(Math.random() * divider);
	console.log("LowerCase length = " + lcaseLength);
	var lcaseString = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < lcaseLength; i++) {
		var index = Math.floor(Math.random() * 26);
		console.log("lowercase char at index = " + index);
		password += lcaseString.charAt(index);
	}
	console.log("password so far = " + password);
}

function getCharacters(divider, str) {
	var charTypeLength = Math.floor(Math.random() * divider) + 1;
	console.log("charTypeLength = " + charTypeLength);
	for (var i = 0; i < charTypeLength; i++) {
		var index = Math.floor(Math.random() * str.length);
		console.log("index = " + index);
		password += str.charAt(index);
	}
	console.log("password so far = " + password);
}

function shuffleStringChars(arg) {
	var str = arg
		.split("")
		.sort(function (x, y) {
			return 0.5 - Math.random();
		})
		.join("");
	console.log(arg);
	return str;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
