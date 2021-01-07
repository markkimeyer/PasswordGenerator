// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
var minLength = 8;
var maxLength = 128;

var password = '';

var userPicksArray = [];
var passwordArray = [];

/

// User's requirements

function generatePassword() {

  // strings of data sets

 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!#$%&'()*+,-/<=>?^@_";
  var passwordLength = prompt("Enter a length from 8-128");

  // prompt if statements 
  if (passwordLength < 8 || passwordLength > 128) {
    // alert("Please enter a number between 8-128");
    var passwordLength2 = prompt("ERROR: Re-enter a number from 8-128");
    passwordLength = passwordLength2;
  }


  var passwordLowerCase = confirm("Do you want to use lowercase letters?");
  var passwordUpperCase = confirm("Do you want to use uppercase letters?");
  var passwordNumbers = confirm("Do you want to use numbers?");
  var passwordSpecialChar = confirm("Do you want to use special characters?");


  // confirm if statements 
  if (passwordLowerCase === true) {
    userPicksArray.push(...lowerCase);
    
  }

  if (passwordUpperCase === true) {
    userPicksArray.push(...upperCase);
  }

   if (passwordNumbers === true) {
    userPicksArray.push(...numbers);
  }

  if (passwordSpecialChar === true) {
    userPicksArray.push(...specialChar);
  }


  //THIS WORKS FOR ALL LOWER CASE
   for (i = 0; i < passwordLength; i++) {
     passwordArray.push(userPicksArray[Math.floor(Math.random() * userPicksArray.length)]);
     console.log(passwordArray.join(""));
     
  
    //   var char = Math.floor(Math.random() * lowerCase.length);
  //   password += lowerCase.charAt(char);
  }
  // alert(password);
   }
  //testing random password 
  // for (i=0; i < passwordLength; i++) {


  // Write password to the #password input
  function writePassword() {
    generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordArray.join("");


  }

  function clearPassword() {
    window.parent.location = window.parent.location.href;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  clearBtn.addEventListener("click", clearPassword);
