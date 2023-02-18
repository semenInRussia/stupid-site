"use strict";
exports.__esModule = true;
exports.decode = exports.encode = void 0;
var alphabetOfMorse = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..",
    "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..",
    "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
    "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-",
    "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
    "z": "--..", " ": "  "
};
function encode(s) {
    var encodeChar = function (ch) { return (alphabetOfMorse[ch] || ch); };
    return s.toLowerCase().split("").map(encodeChar).join(" ");
}
exports.encode = encode;
function decode(s) {
    var alphabet = reverseAlphabet(alphabetOfMorse);
    var decodeWord = function (w) { return w.split(" ").map(function (ch) { return alphabet[ch] || ch; }); };
    var words = s.toLowerCase().split("  ");
    return words.map(decodeWord).join(" ");
}
exports.decode = decode;
function reverseAlphabet(originalAlphabet) {
    var alphabet = {};
    var keys = Object.keys(originalAlphabet);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var originalKey = keys_1[_i];
        var value = originalAlphabet[originalKey];
        alphabet[value] = originalKey;
    }
    return alphabet;
}
