function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomElement(arr) {
    const arrayLength = arr.length;

    const randomIndex = Math.floor((Math.random() * arrayLength));

    return arr[randomIndex];
}

function generateAllowableCharacters(lowerAllowed, upperAllowed, numberAllowed, specialAllowed) {
    const allowableCharacters = [];

    if (lowerAllowed) {
        allowableCharacters.concat(lowerCaseArray);
    }

    if (upperAllowed) {
        allowableCharacters.concat(upperCaseArray);
    }

    if (numberAllowed) {
        allowableCharacters.concat(numberArray);
    }

    if (specialAllowed) {
        allowableCharacters.concat(specialArray);
    }
    // Do the same for the rest of the character arrays.... DONE
}

function isPasswordRequiredLength(password) {
    return password >= 8 && password <= 128;
}

var lowerCaseArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"];

var upperCaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"];

var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialArray = ["!", "@", "£", "$", "%", "^", "&", "*"];

var allCharactersArray = [].concat(lowerCaseArray, upperCaseArray, numberArray, specialArray)


function generateNewPassword() {
    var generatedPassword = [];
    var passwordRequirements = {};
    var allRequirementsMet = false;

    passwordRequirements.length = Number(prompt("Insert number between 8-128 for length of new password"));
    var passwordIsRequiredLength = isPasswordRequiredLength(passwordRequirements.length)
    var passwordIsNumber = typeof passwordRequirements.length === "number"

    if (!passwordIsNumber || !passwordIsRequiredLength) {
        // Add an alert that the user needs to input a number....
        alert("Please provide password length between 8-128");
    } else {
        var shouldUseLower = confirm("Should the password contain lowercase letters?");

        if (shouldUseLower) {
            alert("lower case letters now being used");
        } else {
            alert("ok, no problem. how about upper case letters?");
        } 

        var shouldUseUpper = confirm("would you like to use upper case letters in your password?");

        if (shouldUseUpper) {
            alert("upper case letters now being used");
        } else {
            alert("ok, no problem. how about numbers?") ;
        }

        var shouldUseNums = confirm("would you like to use numbers in your password?");

        if (shouldUseNums) {
            alert("numbers now being used");
        } else {
            alert("ok, no problem. how about special characters?");
        } 

        var shouldUseSpecial = confirm("would you like to use special characters in your password?");

        if (shouldUseSpecial) {
            alert("special characters now being used")
        } else {
            alert("ok, no problem. Let me generate your password!")
        }

        const allowableCharacters = generateAllowableCharacters(shouldUseLower,shouldUseUpper,shouldUseNums,shouldUseSpecial);
      
       

        for (let i = 0; i < passwordRequirements.length; i++) {
            if (shouldUseLower == true && shouldUseUpper == true && shouldUseNums == true && shouldUseSpecial == true ) {
                generatedPassword.push(getRandomElement(lowerCaseArray+upperCaseArray+numberArray+specialArray))
                const shuffledPassword = shuffle(generatedPassword);

                const shuffledPasswordString = shuffledPassword.join("");
                displayPassword(shuffledPasswordString);
                console.log("All true")
            } else if (shouldUseLower == true && shouldUseUpper == false && shouldUseNums == false && shouldUseSpecial == true ) {
            
                console.log("Not all true");
                // You are going to add something to make sure that
                // whatever requirements are set are definitely met
            }

            else {
                const tryAgain = "Try Again!"
                displayPassword(tryAgain);

            }

        }
        // generatedPassword = ["a", "B", "4", "!", "a", 4, 3, 6]
        


        function displayPassword(password){

            document.getElementById("passwordBox").value = '';
            document.getElementById("passwordBox").value = password;

        }
       

        




        // if (lowerCase == true && upperCase == true && numbers == true && special == true) {
        //     myFunction(array);
        // }

        // if (lowerCase == true && upperCase == false && numbers == false && special == false) {
        //     myFunction(lowerCaseArray);
        // }

        // if (lowerCase == false && upperCase == true && numbers == false && special == false) {
        //     myFunction(upperCaseArray);
        // }

        // if (lowerCase == false && upperCase == false && numbers == true && special == false) {
        //     myFunction(numberArray);
        // }

        // if (lowerCase == false && upperCase == false && numbers == false && special == true) {
        //     myFunction(specialArray);
        // }
    }
};





// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

function myFunction(arrayPick) {
    document.getElementById("passwordBox").innerHTML += shuffle(arrayPick);
}

// console.log(shuffle(array));



function clipboard() {
    /* Get the text field */
    var copyText = document.getElementById("passwordBox");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

    document.execCommand("paste");


    
}