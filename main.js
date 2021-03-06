const inputElement = document.getElementById("user-input")
const outputElement = document.getElementById("output")
const keyElement = document.getElementById("key")
const keyMainElement = document.getElementById("key-main")
const selectElement = document.getElementById("cipher-select")
const selectModeElement = document.getElementById("mode-select")

const modes = [
    {
        name: "Зашифровать",
        changeOutput: encodeOutput
    },
    {
        name: "Расшифровать",
        changeOutput: decodeOutput
    }
]

let currentMode = modes[0]

const defaultCipherData = {
    keyHTML: (
        `<div class="key">
    <label for="key">Ваш пароль, пожалуйста:</label>
    <input oninput="changeOutput()" value="0" type="number" id="key" class="text-input">
</div>`
    )
}

const ciphers = [
    {
        name: "The Caesar",
        encode: causerEncode,
        decode: (txt, key) => (causerEncode(txt, -key)),
        keyHTML: defaultCipherData.keyHTML,
        inputForEncode: () => (
            [parseInt(keyElement.value) || 0]
        ),
        inputForDecode() {
            return undefined;
        }
    },
    {
        name: "The Morse",
        encode: morseEncode,
        decode: morseDecode,
        keyHTML: "",
        inputForEncode: () => ([]),
        inputForDecode() {
            return undefined;
        }
    },
    {
        name: "MD5",
        encode: md5,
        keyHTML: "",
        inputForEncode: () => ([]),
        inputForDecode() {
            return undefined;
        }
    },
    {
        name: "For Tests",
        encode: (x) => (x),
        decode: (x) => (x),
        keyHTML: "",
        inputForEncode: () => ([])
    }
]

let currentCipher = ciphers[0]

function changeCipherToSelected() {
    changeCurrentCipherByName(selectElement.value)
}

function changeCurrentCipherByName(cipherName) {
    changeCurrentCipher(ciphers.filter((cipher) => (cipherName === cipher.name))[0])
}

function changeCurrentCipher(newCipher) {
    currentCipher = newCipher
    changeKeysHTMLByCipher(newCipher)
    changeOutput()
}

function changeKeysHTMLByCipher(cipher) {
    keyMainElement.innerHTML = cipher.keyHTML
}

function changeSelectHTML() {
    selectElement.innerHTML = ciphers
        .map(cipher => (`<option>${cipher.name}</option>`))
        .join("\n")
}

function changeSelectModeHTML() {
    selectModeElement.innerHTML = modes
        .map(cipher => (`<option>${cipher.name}</option>`))
        .join("\n")
}

function changeCurrentModeToSelected() {
    changeCurrentModeByName(selectModeElement.value)
}

function changeCurrentModeByName(name) {
    changeCurrentMode(modes.filter(mode => mode.name === name)[0])
}

function changeCurrentMode(mode) {
    currentMode = mode
}

function changeOutput() {
    currentMode.changeOutput()
}

function encodeOutput() {
    const keys = currentCipher.inputForEncode()
    const encode = currentCipher.encode
    outputElement.innerText = encode(inputElement.value, ...keys)
}

function decodeOutput() {
    const keys = currentCipher.inputForDecode() || currentCipher.inputForEncode()
    const decode = currentCipher.decode
    console.log(decode)
    outputElement.innerText = decode(inputElement.value, ...keys)
}

let alphabetString = 'qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?/;\'[].,!@#$%^&*()_+\\=-|`йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИИТЬ╔'
let alphabetOfCaesar = Array.from(alphabetString)
let alphabetOfCaesarLength = alphabetOfCaesar.length


function causerEncode(string, shift) {
    let chars = Array.from(string)
        .map(char => alphabetOfCaesar.indexOf(char))
        .map(indexOfChar => (indexOfChar + shift))
        .map(Math.abs)
        .map(indexOfChar => indexOfChar % alphabetOfCaesarLength)
        .map(indexOfChar => alphabetOfCaesar[indexOfChar])

    return charsToString(chars)
}


function charsToString(chars) {
    let res = ""
    let char;

    for (char of chars) {
        res += char
    }

    return res
}

let alphabetOfMorse = [
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..']
]


function morseEncode(string) {
    let result = ''
    string = string.toLowerCase()

    for (let symbol of string) {
        let encodedString = ''

        for (let currentSymbolAndValue of alphabetOfMorse) {
            let currentSymbol = currentSymbolAndValue[0]
            let valueOfCurrentSymbol = currentSymbolAndValue[1]

            if (currentSymbol === symbol) {
                encodedString = valueOfCurrentSymbol
            }
        }

        result += encodedString
        result += ' '
    }

    return result.slice(0, -1)
}

function morseDecode(string) {
    let result = ''

    string = string.toLowerCase()

    let valuesOfSymbols = string.split(' ')

    for (let encodedSymbol of valuesOfSymbols) {
        let decodedSymbol = ''

        for (let currentValueAndSymbol of alphabetOfMorse) {
            let currentSymbol = currentValueAndSymbol[0]
            let valueOfCurrentSymbol = currentValueAndSymbol[1]

            if (encodedSymbol === valueOfCurrentSymbol) {
                decodedSymbol = currentSymbol
                break
            }
        }

        result += decodedSymbol
    }

    return result
}

function md5(string) {
    let x = Array();
    let k,   AA, BB, CC, DD, a, b, c, d;
    let S11 = 7
    let S12 = 12
    let S13 = 17
    let S14 = 22;

    let S21 = 5;
    let S22 = 9;
    let S23 = 14;
    let S24 = 20;
    let S31 = 4;
    let S32 = 11;
    let S33 = 16;
    let S34 = 23;
    let S41 = 6;
    let S42 = 10;
    let S43 = 15;
    let S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = addUnsignedNum(a, AA);
        b = addUnsignedNum(b, BB);
        c = addUnsignedNum(c, CC);
        d = addUnsignedNum(d, DD);
    }

    return WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
}

function addUnsignedNum(lX, lY) {
    let lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
        if (lResult & 0x40000000) {
            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
        } else {
            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        }
    } else {
        return (lResult ^ lX8 ^ lY8);
    }
}

function F(x, y, z) {
    return (x & y) | ((~x) & z);
}

function G(x, y, z) {
    return (x & z) | (y & (~z));
}

function H(x, y, z) {
    return (x ^ y ^ z);
}

function I(x, y, z) {
    return (y ^ (x | (~z)));
}

function FF(a, b, c, d, x, s, ac) {
    a = addUnsignedNum(a, addUnsignedNum(addUnsignedNum(F(b, c, d), x), ac));
    return addUnsignedNum(RotateLeft(a, s), b);
}

function GG(a, b, c, d, x, s, ac) {
    a = addUnsignedNum(a, addUnsignedNum(addUnsignedNum(G(b, c, d), x), ac));
    return addUnsignedNum(RotateLeft(a, s), b);
}

function HH(a, b, c, d, x, s, ac) {
    a = addUnsignedNum(a, addUnsignedNum(addUnsignedNum(H(b, c, d), x), ac));
    return addUnsignedNum(RotateLeft(a, s), b);
}

function II(a, b, c, d, x, s, ac) {
    a = addUnsignedNum(a, addUnsignedNum(addUnsignedNum(I(b, c, d), x), ac));
    return addUnsignedNum(RotateLeft(a, s), b);
}


function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

function Utf8Encode(string) {
    let utftext = "";

    for (let n = 0; n < string.length; n++) {

        let c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
}


function WordToHex(lValue) {
    let WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
}

function ConvertToWordArray(string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWords_temp1 = lMessageLength + 8;
    const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1);
    let lBytePosition = 0;
    let lByteCount = 0;
    while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
        lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
}


changeSelectHTML()
changeSelectModeHTML()