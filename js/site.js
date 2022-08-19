//Get the string from page
function getValue() {
    document.getElementById("alert").classList.add("invisible")
    let userInput = document.getElementById("userString").value
    let reversedString = checkInput(userInput)
    // displayString(reversedString)
}


//Reverse the string

function checkInput(userInput) {
    let reversedString = []
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedString += userInput[i]
    }
    reversedString = reversedString.toLowerCase()
    let regex = /[^a-z0-9]/gi
    reversedString = reversedString.replace(regex, "")

    userInput = userInput.toLowerCase()
    userInput = userInput.replace(regex, "")

    if (userInput == reversedString) {
        document.getElementById("palindromeHeading").innerHTML = "Well Done! Your Word/Phrase Is a Palindrome!"
        displayString(reversedString)
    } else {
        document.getElementById("palindromeHeading").innerHTML = `Sorry!`
        document.getElementById("msg").innerHTML = `${reversedString} is not a palindrome.`
        document.getElementById("alert").classList.remove("invisible")
    }
    return
}


//Display message and string

function displayString(reversedString) {
    document.getElementById("msg").innerHTML = `Your word or phrase reversed is: ${reversedString}`
    document.getElementById("alert").classList.remove("invisible")
}