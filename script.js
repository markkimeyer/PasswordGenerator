// Assignment Code
var generateBtn = document.querySelector("#generate");

var minLength =8;
var maxLength =128;

var password = '';

function generatePassword() {

  // strings of data sets
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numbers = 0123456789;
 var specialChar = "!#$%&'()*+,-/<=>?@\^_";
 

 // User's requirements
  
  var passwordLength = prompt("Enter a length from 8-128");

  // prompt if statements 
    if (passwordLength < minLength || passwordLength > maxLength) {
      // alert("Please enter a number between 8-128");
      var passwordLength2 = prompt("ERROR: Re-enter a number from 8-128");
      passwordLength = passwordLength2;
    }
   

  // var passwordLowerCase = confirm("Do you want to use lowercase letters?");
  // var passwordUpperCase =confirm("Do you want to use uppercase letters?");
  // var passwordNumbers =confirm("Do you want to use numbers?");
  // var passwordSpecialChar =confirm("Do you want to use special characters?");


// confirm if statements 
    // if (passwordLowerCase) {
    //   alert("you have chosen to use lower case letters");
    // }

    // if (passwordUpperCase) {
    //   alert("you have chosen to use upper case letters");
    // }

    //  if (passwordNumbers) {
    //   alert("you have chosen to use numbers");
    // }

    // if (passwordSpecialChar) {
    //   alert("you have chosen to use special characters");
    // }

  for (i=0; i < passwordLength; i++) {
    var char = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase.charAt(char);
  }
  alert(password);
  }

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
