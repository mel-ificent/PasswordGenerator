// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password prompts

function generatePassword(){
    var passwordCriteria = [];
    var characterOption = [];
    var character = 'abcdefghijklmnopqrstuvwxyz';
    var special =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passwordArray = [];
    var passwordLength = parseInt(prompt("How many characters long do you want your password to be?"));

//If statement to check whether number is at least 8 characters and no more than 128 characters and is an actual number
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert("Please enter a number greater than 8 and less than 128");
        return '';
    }

//Additional prompts to ask user what other criteria needs to be met for the password.  Update passwordCriteria array with user's responses
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

//Added a check to confirm that the end user entered at least one password criteria, otherwise they are prompted to try again
        if(!passwordCriteria[1] &&!passwordCriteria[2] && !passwordCriteria[3] && !passwordCriteria[4]){
            alert("You did not choose any password criteria.  Please try again.");
            return '';
        }
    }

    //For loop to generate a password character for the length of the password defined by the user
    //In the loop we have a series of if statements to determine a valid set of values that can be used for each character of the password based on the user's criteria
    var z = 0;
    for(i=0; i<passwordCriteria[0]; i++){
    if(passwordCriteria[1]){
            
        characterOption.push(Math.floor((Math.random() * 9) + 1));

     }

    if(passwordCriteria[2]){
        characterOption.push(special.charAt(Math.floor(Math.random() * special.length)));

     }

    if(passwordCriteria[3]){
            
        characterOption.push(character.charAt(Math.floor(Math.random() * character.length)));

     }

     if(passwordCriteria[4]){
        characterOption.push(character.charAt(Math.floor(Math.random() * character.length)).toUpperCase());

     }
    //Once we have the list of possible password character values, we are going to pick one of the values at random and add it to our password array
    //However, we need to make sure that at least one character of the password meets each user requirement
     
    if (z>0 && z<5){
        passwordArray.push(characterOption[z]);
        console.log(z);
    }
    else{
        var x = Math.floor((Math.random() * characterOption.length));
        passwordArray.push(characterOption[x]);
    }
    z++;
    

   }
  //after defining the passwordArray return a string value of the Array without commas 
   return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
