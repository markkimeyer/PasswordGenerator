// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // strings of data sets
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numbers = 0123456789;
 var specialChar = "!#$%&'()*+,-/<=>?@\^_";

 // User's requirements
  var passwordLength = prompt("Enter a length from 8-128");

  var passwordLowerCase = confirm("Do you want to use lowercase letters?");
  var passwordUpperCase =confirm("Do you want to use uppercase letters?");
  var passwordNumbers =confirm("Do you want to use numbers?");
  var passwordSpecialChar =confirm("Do you want to use special characters?");


// if statements 
    if (passwordLowerCase) {
      alert("you have chosen to use lower case letters");
    }

    if (passwordUpperCase) {
      alert("you have chosen to use upper case letters");
    }

     if (passwordNumbers) {
      alert("you have chosen to use numbers");
    }

    if (passwordSpecialChar) {
      alert("you have chosen to use special characters");
    }

  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
