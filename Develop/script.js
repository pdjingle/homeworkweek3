// // Assignment Code
// // Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
var generateBtn = document.querySelector("#generate");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  
  
  var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

  // var charType = confirm("Enter a character type: special, numeric, uppercase, lowercase.");
  var Lower = confirm("Would you like lowercase characters?");
  var Upper = confirm("Would you like uppercase characters?");
  var Numeric = confirm("Would you like numeric characters?");
  var Special = confirm("would you like special characters?");

  // Types of characters 
  if( Lower ) {
    charSet += "abcdefghijklmnopqrstuvwxyz";

  } if( Upper ) {
   charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  } if( Numeric ) {
    charSet += "0123456789";
  
  } if( Special ) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
console.log (charSet)
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(retVal)
  return retVal;
}
alert(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

