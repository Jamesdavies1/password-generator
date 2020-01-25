function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

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
            alert("ok, no problem. how about numbers?");
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

        const allowableCharacters = generateAllowableCharacters(shouldUseLower, shouldUseUpper, shouldUseNums, shouldUseSpecial);

        for (let i = 0; i < passwordRequirements.length; i++) {
            if (shouldUseLower == true && shouldUseUpper == true && shouldUseNums == true && shouldUseSpecial == true) {
                generatedPassword.push(getRandomElement(lowerCaseArray + upperCaseArray + numberArray + specialArray))
                const shuffledPassword = shuffle(generatedPassword);
                const shuffledPasswordString = shuffledPassword.join("");
                displayPassword(shuffledPasswordString);
                console.log("All true")
            } else if (shouldUseLower == true && shouldUseUpper == false && shouldUseNums == false && shouldUseSpecial == true) {
                console.log("Not all true");
            }

            else {
                const tryAgain = "Try Again!"
                displayPassword(tryAgain);
            };
        };

        function displayPassword(password) {
            document.getElementById("passwordBox").value = '';
            document.getElementById("passwordBox").value = password;
        };
    };
};

function myFunction(arrayPick) {
    document.getElementById("passwordBox").innerHTML += shuffle(arrayPick);
}

function clipboard() {
    var copyText = document.getElementById("passwordBox");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}