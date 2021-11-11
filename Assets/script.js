// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password prompts

function generatePassword(){
    var passwordCriteria = [];
    var passwordLength = parseInt(prompt("How many characters long do you want your password to be?"));

//If statement to check whether number is at least 8 characters and no more than 128 characters and is an actual number
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert("Please enter a number greater than 8 and less than 128");
        generatePassword();
    }
    
    else {
        passwordCriteria[0] = passwordLength;

        var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
        passwordCriteria[1] = passwordNumeric;

        var passwordSpecial= confirm("Click OK to confirm including special characters.");
        passwordCriteria[2] = passwordSpecial;
        var passwordLowerCase = confirm("Click OK to confirm including lowercase characters.");
        passwordCriteria[3] = passwordLowerCase;

        var passwordUpperCase = confirm("Click OK to confirm including uppercase characters.");
        passwordCriteria[4] = passwordUpperCase;
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
