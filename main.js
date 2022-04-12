const inputElement = document.getElementById("user-input")
const outputElement = document.getElementById("output")
const keyElement = document.getElementById("key")
const savedMessages = document.getElementById("saved-messages")

function changeOutput() {
    const shift = parseInt(keyElement.value)

    if (shift) {
        outputElement.innerText = encode(inputElement.value, shift)
    }
}

function saveUserText() {
    let userText = inputElement.value
    saveText(userText)
}

function saveText(text) {
    savedMessages.append(text)
    savedMessages.append("<br>")
}

let alphabetString = 'qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?/;\'[].,!@#$%^&*()_+\\=-|`йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИИТЬ╔'
let alphabet = Array.from(alphabetString)
let alphabetLength = alphabet.length


function encode(string, shift) {
    let chars = Array.from(string)
        .map(char => alphabet.indexOf(char))
        .map(indexOfChar => (indexOfChar + shift))
        .map(Math.abs)
        .map(indexOfChar => indexOfChar % alphabetLength)
        .map(indexOfChar => alphabet[indexOfChar])

    return charsToString(chars)
}

function decode(string, shift) {
    let negativeShift = 0 - shift

    console.log(negativeShift)

    return encode(string, negativeShift)
}

function charsToString(chars) {
    let res = ""
    let char;

    for (char of chars) {
        res += char
    }

    return res
}