"use strict";
exports.__esModule = true;
exports.encode = exports.decode = void 0;
var alphabetString = "qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?/;'[].,!@#$%^&*()_+\\=-|`йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИИТЬ╔";
var alphabetOfCaesar = alphabetString.split("");
var alphabetOfCaesarLength = alphabetOfCaesar.length;
function decode(string, shift) {
    return encode(string, -shift);
}
exports.decode = decode;
function encode(string, shift) {
    var chars = string.split("")
        .map(function (char) { return alphabetOfCaesar.indexOf(char); })
        .map(function (indexOfChar) { return indexOfChar + shift; })
        .map(Math.abs)
        .map(function (indexOfChar) { return indexOfChar % alphabetOfCaesarLength; })
        .map(function (indexOfChar) { return alphabetOfCaesar[indexOfChar]; });
    return charsToString(chars);
}
exports.encode = encode;
function charsToString(chars) {
    return chars.join("");
}
