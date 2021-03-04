// Assignment Code
// Declare variables at the top
var generateBtn = document.querySelector("#generate");
var length; 
var uppers = true;
var lower; 
var numbers;
var specials;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  var length = passwordLength();
  var options = passwordOptions();
  
  var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
  
  var passwordGenArray = [];
  
  if (options.lowers) {
    passwordGenArray = passwordGenArray.concat(lowercaseLettersArray)
  }
  
  if (options.uppers) {
    passwordGenArray = passwordGenArray.concat(uppercaseLettersArray)
  }

  if (options.numbers) {
    passwordGenArray = passwordGenArray.concat(numbersArray)
  }

  if (options.specials) {
    passwordGenArray = passwordGenArray.concat(specialCharactersArray)
  }

  var password = "";
  for (var i = 0; i < length; i ++) {
    password = password + passwordGenArray[Math.floor(Math.random() * passwordGenArray.length)];
    // choose random letters of that passwordGenArray
  }

  // return randomly generated password 
  return password;
}

// Declare functions
function passwordLength() {
  // Prompt user to select a number between 8-128.
  length = prompt("Pick a number between 8 and 128")
  if (length > 128 || length < 8){
    alert("Password length must be between 8 and 128 characters")
    passwordLength()

  } 
  return length;
}

function passwordOptions() {
  // Prompt user with series or confirms asking if they want specific characters
  lowers = confirm("Do you want lowercase in your password?");
  uppers = confirm("Do you want uppercase in your password?");
  numbers = confirm("Do you want numbers in your password?");
  specials = confirm("Do you want special characters in your password?");

  if (!lowers && !uppers && !numbers && !specials) {
    alert("You select no for all options, please choose at least one option for the password generator to work!")
    passwordOptions()
  }

  return options = {
    lowers: lowers,
    uppers: uppers,
    numbers: numbers,
    specials: specials
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
