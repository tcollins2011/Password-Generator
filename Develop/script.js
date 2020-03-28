// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// array of special characters that can be used
var specialCharacters= ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=', '-', "_"]
// array of numerical characters that can be used
var numericCharacters= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// array of upper case characters that can be used
var upperCharacters= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// array of lower case characters that can be used
var lowerCharacters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// array that contains characters that the user selected for password
var userSelectedCharacters = []
// arry that contains the length of the user selected password
var userLength = ''

// Prompts the user for a password length of 8-128 and validates their response
function getUserInput(){
   userLength = parseInt(prompt('Enter a number between 8 and 128 for your password length'))
  if (isNaN(userLength) === true) {
    alert('Please provide a number');
    return;
  }
  else if(userLength < 8){
    alert('Please select a number that is between 8 and 128');
    return;
  }
  else if (userLength > 128){
    alert('Please select a number that between 8 and 128');
    return;
  }
}

// Confirms from the user what types of characters they want in their password and pushes them to userSelectedCharacters 
function chooseCharacterTypes(){
  var hasSpecialCharacters = confirm('Do you want to have special characters in your password')
  if (hasSpecialCharacters === true){
    userSelectedCharacters = userSelectedCharacters.concat(specialCharacters)
  } 

  var hasNumericCharacters = confirm('Do you want to have numerical characters in your password')
  if (hasNumericCharacters === true){
    userSelectedCharacters =userSelectedCharacters.concat(numericCharacters)
  }

  var hasUpperCaseCharacters = confirm('Do you want to have uppercase characters in your password')
  if (hasUpperCaseCharacters === true){
    userSelectedCharacters = userSelectedCharacters.concat(upperCharacters)
  }

  var hasLowerCaseCharacters = confirm('Do you want to have lowercase characters in your password')
  if (hasLowerCaseCharacters === true){
    userSelectedCharacters = userSelectedCharacters.concat(lowerCharacters)
  }
}
// Generates a random character from an array
function getRandom(arr){
  var randomized = arr[Math.floor(Math.random() * arr.length)];
  return randomized
}

// Generates the Password
function generatePassword(){
  var result = []
  getUserInput();
  chooseCharacterTypes();
  for (var i = 0; i < userLength; i++) {
    result.push(getRandom(userSelectedCharacters))
  }
  return result
}



