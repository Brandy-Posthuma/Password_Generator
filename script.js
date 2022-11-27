// Assignment Code
var generateBtn = document.querySelector("#generate");
var UppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //26 letters
var LowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //26 letters
var Specialchar = ["$", "~", ",", "{", "}", "`", "^", "!", ", ", "#", "%", "@", "&", "'", "*", "+", ".", "/", ":", "<", ">", "?", "=",]; //23 special characters used
var Numberchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // 10 numbers including 0
var Random = []
var Temppass = []

// Write password to the #password input (given code for the assignment and it will display the password on the page once it is generated)
function writePassword() {
  var passwordLength = window.prompt("Pick a password length between 8-128 characters.")
  if (passwordLength >=8 || passwordLength <= 128){
  }

//Different types of Variables to recieve from prompts from the user
  if (confirm("Would you like to use uppercase letters?")==true) {
    Random = Random.concat(UppercaseChar);
  } else {
    text = "No issues.";
  }
  if (confirm("Would you like to use lowercase letters?")==true) {
    Random = Random.concat(LowercaseChar);
  } else {
    text = "No issues.";
  }  
  if (confirm("Would you like to use any special characters?") ==true) {
    Random = Random.concat(Specialchar);
  } else {
    text = "No issues.";
  }
  if (confirm("Would you like to use any numbers?") ==true) {
    Random = Random.concat(Specialchar);
  } else {
    text = "No issues.";
  };
  console.log(Random);
// Using a While Loop to repeat the code until the specific user inputs are met 
//the code will continue to push to temp array with the random criteria
  while (Temppass.length != passwordLength) {
    Temppass.push(generatePassword(Random));
  }
  console.log(Temppass)
//create temp password
  var passwordText = document.querySelector("#password");
  passwordText.value = Temppass.join(''); //using joing here to remove commas between
} 
function generatePassword(array){
  return array[Math.floor(Math.random() * array.length)];
} 
//Event listener - click on generate button
generateBtn.addEventListener("click", writePassword);