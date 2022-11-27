// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordInfo = {

  //how long is the password
  passwordLength: 0,

// lowercase characters
passwordLowercaseChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

// UPPERCASE CHARACTERS
passwordUppercaseChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

// Numbers
passwordNumberchar: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

// Speciacl Characters
passwordSpecialchar: ["$", "~", ",", "{", "}", "`", "^", "!", ", ", "#", "%", "@", "&", "'", "*", "+", ".", "/", ":", "<", ">", "?", "=",], 
}


// Write password to the #password input (given code for the assignment)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  };

// Add event listener to generate button (given code for the assignment)
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";

  //Different types of Variables to recieve from prompts from the user
  var passwordLength = 0;
  var passwordUppercaseChar;
  var passwordLowercaseChar;
  var passwordNumberchar;
  var passwordSpecialchar;

  //Information to Initilize password
  passwordLength = 0;
  passwordInfo.passwordLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword has to be between 8 and 128 characters in length."):

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {

      if (!isFinite(passwordLength)) {
        alert("Please enter a number");
        return "Your secure password";
      }
      else {
        //this is to check the length of the password and meets the lenght requirements
        if (passwordLength < 8 || passwordLength > 128) {
          alert("The password must be between 8 and 128 characters in length.");
          return "your secure password";
        }
        else {

          showPrompts();

          while (passwordInfo.passwordLength < passwordLength) {
            if (passwordLowercaseChar === false && passwordUppercaseChar === false && passwordNumberchar === false && passwordSpecialchar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special chatacters")
              showPrompts();
            }
            else {
              if (passwordLowercaseChar === true && passwordInfo.passwordLength < passwordLength) {
                var lowercase = passwordInfo.passwordLowercaseChar[Math.floor(Math.random()*26)]
                result = result + lowercase;
                passwordInfo.passwordLength++;
              }
              if 
            }
          }


        }
      }
    }
  }

}