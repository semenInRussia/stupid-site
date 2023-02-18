"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var inputElement = document.getElementById("user-input");
var outputElement = document.getElementById("output");
var keyElement = document.getElementById("key");
var keyMainElement = document.getElementById("key-main");
var selectElement = document.getElementById("cipher-select");
var selectModeElement = document.getElementById("mode-select");
var modes = [
    {
        name: "Зашифровать",
        changeOutput: encodeOutput
    },
    {
        name: "Расшифровать",
        changeOutput: decodeOutput
    },
];
var currentMode = modes[0];
var defaultCipherData = {
    keyHTML: "<div class=\"key\">\n<label for=\"key\">\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430:</label>\n<input\noninput=\"changeOutput()\"\nvalue=\"0\"\ntype=\"number\"\nid=\"key\" class=\"text-input\">\n</div>"
};
var causer = require("./ciphers/causer.js");
var md5_js_1 = require("./ciphers/md5.js");
var morse = require("./ciphers/morse.js");
var ciphers = [
    {
        name: "The Caesar",
        encode: causer.encode,
        decode: causer.decode,
        keyHTML: defaultCipherData.keyHTML,
        inputForEncode: function () { return [parseInt(keyElement === null || keyElement === void 0 ? void 0 : keyElement.value) || 0]; }
    },
    {
        name: "The Morse",
        encode: morse.encode,
        decode: morse.decode,
        keyHTML: "",
        inputForEncode: function () { return []; },
        inputForDecode: function () { return undefined; }
    },
    {
        name: "MD5",
        encode: md5_js_1.md5,
        keyHTML: ""
    },
    {
        name: "For Tests",
        encode: function (x) { return x; },
        decode: function (x) { return x; },
        keyHTML: ""
    }
];
var currentCipher = ciphers[0];
function changeCipherToSelected() {
    changeCurrentCipherByName(selectElement === null || selectElement === void 0 ? void 0 : selectElement.value);
}
function changeCurrentCipherByName(cipherName) {
    changeCurrentCipher(ciphers
        .filter(function (cipher) { return cipherName === cipher.name; })[0]);
}
function changeCurrentCipher(newCipher) {
    currentCipher = newCipher;
    changeKeysHTMLByCipher(newCipher);
    changeOutput();
}
function changeKeysHTMLByCipher(cipher) {
    if (keyMainElement !== null) {
        if (cipher.keyHTML === "") {
            keyMainElement.innerHTML = "";
        }
        else {
            keyMainElement.innerHTML = cipher.keyHTML || defaultCipherData.keyHTML;
        }
    }
}
function changeSelectHTML() {
    selectElement.innerHTML = ciphers
        .map(function (cipher) { return "<option>".concat(cipher.name, "</option>"); })
        .join("\n");
}
function changeSelectModeHTML() {
    if (selectModeElement !== null) {
        selectModeElement.innerHTML = modes
            .map(function (mode) { return "<option>".concat(mode.name, "</option>"); })
            .join("\n");
    }
}
function changeCurrentModeToSelected() {
    if (selectModeElement !== null) {
        changeCurrentModeByName(selectModeElement.value);
    }
}
function changeCurrentModeByName(name) {
    changeCurrentMode(modes.filter(function (mode) { return mode.name === name; })[0]);
}
function changeCurrentMode(mode) {
    currentMode = mode;
}
function changeOutput() {
    currentMode.changeOutput();
}
function encodeOutput() {
    var keys;
    if (currentCipher.inputForEncode) {
        keys = currentCipher.inputForEncode() || [];
    }
    else {
        keys = [];
    }
    var encode = currentCipher.encode;
    if (outputElement !== null && inputElement !== null) {
        keys = keys || [];
        outputElement.innerText = encode.apply(void 0, __spreadArray([inputElement.value], keys, false));
    }
}
function decodeOutput() {
    if (currentCipher) {
        var fetchKeys = currentCipher.inputForDecode
            || currentCipher.inputForEncode
            || (function () { return []; });
        var keys = fetchKeys();
        var decode = currentCipher.decode;
        if (outputElement !== null && decode) {
            outputElement.innerText = decode.apply(void 0, __spreadArray([inputElement.value], keys, false));
        }
    }
}
selectModeElement.addEventListener("change", changeCurrentModeToSelected);
selectElement.addEventListener("change", changeCipherToSelected);
inputElement.addEventListener("change", changeOutput);
inputElement.addEventListener("input", changeOutput);
keyElement.addEventListener("input", changeOutput);
changeSelectHTML();
changeSelectModeHTML();
