"use strict";
(() => {
  // src/ciphers/causer.ts
  var alphabetString = "qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?/;'[].,!@#$%^&*()_+\\=-|`\u0439\u0446\u0443\u043A\u0435\u043D\u0433\u0448\u0449\u0437\u0445\u044A\u0444\u044B\u0432\u0430\u043F\u0440\u043E\u043B\u0434\u0436\u044D\u044F\u0447\u0441\u043C\u0438\u0442\u044C\u0431\u044E\u0419\u0426\u0423\u041A\u0415\u041D\u0413\u0428\u0429\u0417\u0425\u042A\u0424\u042B\u0412\u0410\u041F\u0420\u041E\u041B\u0414\u0416\u042D\u042F\u0427\u0421\u041C\u0418\u0418\u0422\u042C\u2554";
  var alphabetOfCaesar = alphabetString.split("");
  var alphabetOfCaesarLength = alphabetOfCaesar.length;
  function decode(string, key) {
    return encode(string, -key);
  }
  function encode(string, key) {
    let chars = string.split("").map((char) => alphabetOfCaesar.indexOf(char)).map((indexOfChar) => indexOfChar + key).map(Math.abs).map((indexOfChar) => indexOfChar % alphabetOfCaesarLength).map((indexOfChar) => alphabetOfCaesar[indexOfChar]);
    return charsToString(chars);
  }
  function charsToString(chars) {
    return chars.join("");
  }

  // src/ciphers/md5.ts
  function md5(string) {
    let x = Array();
    let k;
    let AA;
    let BB;
    let CC;
    let DD;
    let a;
    let b;
    let c;
    let d;
    let S11 = 7;
    let S12 = 12;
    let S13 = 17;
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
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
      d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
      c = FF(c, d, a, b, x[k + 2], S13, 606105819);
      b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
      a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
      d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
      c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
      b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
      a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
      d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
      c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
      b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
      a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
      d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
      c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
      b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
      a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
      d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
      c = GG(c, d, a, b, x[k + 11], S23, 643717713);
      b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
      a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
      d = GG(d, a, b, c, x[k + 10], S22, 38016083);
      c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
      b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
      a = GG(a, b, c, d, x[k + 9], S21, 568446438);
      d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
      c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
      b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
      a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
      d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
      c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
      b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
      a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
      d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
      c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
      b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
      a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
      d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
      c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
      b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
      a = HH(a, b, c, d, x[k + 13], S31, 681279174);
      d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
      c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
      b = HH(b, c, d, a, x[k + 6], S34, 76029189);
      a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
      d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
      c = HH(c, d, a, b, x[k + 15], S33, 530742520);
      b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
      a = II(a, b, c, d, x[k + 0], S41, 4096336452);
      d = II(d, a, b, c, x[k + 7], S42, 1126891415);
      c = II(c, d, a, b, x[k + 14], S43, 2878612391);
      b = II(b, c, d, a, x[k + 5], S44, 4237533241);
      a = II(a, b, c, d, x[k + 12], S41, 1700485571);
      d = II(d, a, b, c, x[k + 3], S42, 2399980690);
      c = II(c, d, a, b, x[k + 10], S43, 4293915773);
      b = II(b, c, d, a, x[k + 1], S44, 2240044497);
      a = II(a, b, c, d, x[k + 8], S41, 1873313359);
      d = II(d, a, b, c, x[k + 15], S42, 4264355552);
      c = II(c, d, a, b, x[k + 6], S43, 2734768916);
      b = II(b, c, d, a, x[k + 13], S44, 1309151649);
      a = II(a, b, c, d, x[k + 4], S41, 4149444226);
      d = II(d, a, b, c, x[k + 11], S42, 3174756917);
      c = II(c, d, a, b, x[k + 2], S43, 718787259);
      b = II(b, c, d, a, x[k + 9], S44, 3951481745);
      a = addUnsignedNum(a, AA);
      b = addUnsignedNum(b, BB);
      c = addUnsignedNum(c, CC);
      d = addUnsignedNum(d, DD);
    }
    return WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  }
  function addUnsignedNum(lX, lY) {
    let lX4;
    let lY4;
    let lX8;
    let lY8;
    let lResult;
    lX8 = lX & 2147483648;
    lY8 = lY & 2147483648;
    lX4 = lX & 1073741824;
    lY4 = lY & 1073741824;
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if (lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }
  function F(x, y, z) {
    return x & y | ~x & z;
  }
  function G(x, y, z) {
    return x & z | y & ~z;
  }
  function H(x, y, z) {
    return x ^ y ^ z;
  }
  function I(x, y, z) {
    return y ^ (x | ~z);
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
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }
  function Utf8Encode(string) {
    let utftext = "";
    for (let n = 0; n < string.length; n++) {
      let c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }
    return utftext;
  }
  function WordToHex(lValue) {
    let WordToHexValue = "";
    let WordToHexValue_temp = "";
    let lByte;
    let lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = `0${lByte.toString(16)}`;
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  function ConvertToWordArray(string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWords_temp1 = lMessageLength + 8;
    const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1);
    let lBytePosition = 0;
    let lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  // src/ciphers/morse.ts
  var alphabetOfMorse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "  "
  };
  function encode2(s) {
    const encodeChar = (ch) => alphabetOfMorse[ch] || ch;
    return s.toLowerCase().split("").map(encodeChar).join(" ");
  }
  function decode2(s) {
    const alphabet = reverseAlphabet(alphabetOfMorse);
    const decodeWord = (w) => w.split(" ").map((ch) => alphabet[ch] || ch);
    const words = s.toLowerCase().split("  ");
    return words.map(decodeWord).join(" ");
  }
  function reverseAlphabet(originalAlphabet) {
    let alphabet = {};
    const keys = Object.keys(originalAlphabet);
    for (const originalKey of keys) {
      const value = originalAlphabet[originalKey];
      alphabet[value] = originalKey;
    }
    return alphabet;
  }

  // src/index.ts
  var inputElement = document.getElementById("user-input");
  var outputElement = document.getElementById("output");
  var keyElement = document.getElementById("key");
  var keyMainElement = document.getElementById("key-main");
  var selectElement = document.getElementById("cipher-select");
  var selectModeElement = document.getElementById("mode-select");
  var modes = [
    {
      name: "\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C",
      changeOutput: encodeOutput
    },
    {
      name: "\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C",
      changeOutput: decodeOutput
    }
  ];
  var currentMode = modes[0];
  var Cipher = class {
    constructor() {
      this.canDecode = false;
    }
    isCanDecode() {
      return this.canDecode;
    }
    encodeString(s) {
      return this.encodeStringWithKeys(s, this.getKeys());
    }
    encodeStringWithKeys(_s, _keys) {
      throw new Error("<cipher>.encodeStringWithKeys() isn't implemented");
    }
    getKeys() {
      throw new Error("<cipher>.encodeStringWithKeys() isn't implemented");
    }
  };
  var DecodableCipher = class extends Cipher {
    constructor() {
      super(...arguments);
      this.canDecode = true;
    }
    decodeString(s) {
      return this.decodeStringWithKeys(s, this.getKeys());
    }
    decodeStringWithKeys(_s, _keys) {
      throw new Error("<cipher>.decodeStringWithKeys() isn't implemented");
    }
  };
  var defaultKeyHTML = `<div class="key">
<label for="key">\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430:</label>
<input oninput="changeOutput()" value="0" type="number"
id="key" class="text-input">
</div>`;
  var Caesar = class extends DecodableCipher {
    constructor() {
      super(...arguments);
      this.name = "The Caesar";
      this.keyHTML = defaultKeyHTML;
      this.encodeStringWithKeys = encode;
      this.decodeStringWithKeys = decode;
      this.getKeys = () => parseInt(keyElement == null ? void 0 : keyElement.value) || 0;
    }
  };
  var Morse = class extends DecodableCipher {
    constructor() {
      super(...arguments);
      this.name = "The Morse";
      this.encodeString = encode2;
      this.decodeString = decode2;
    }
  };
  var MD5 = class extends Cipher {
    constructor() {
      super(...arguments);
      this.name = "MD5";
      this.encodeString = md5;
    }
  };
  var ciphers = [
    new Caesar(),
    new Morse(),
    new MD5()
  ];
  var currentCipher = ciphers[0];
  function changeCipherToSelected() {
    changeCurrentCipherByName(selectElement == null ? void 0 : selectElement.value);
  }
  function changeCurrentCipherByName(cipherName) {
    return changeCurrentCipher(ciphers.filter((cipher) => cipherName === cipher.name)[0]);
  }
  function changeCurrentCipher(newCipher) {
    currentCipher = newCipher;
    changeKeysHTMLByCipher(newCipher);
    changeOutput();
    return currentCipher;
  }
  function changeKeysHTMLByCipher(cipher) {
    if (!keyMainElement) {
      return void 0;
    }
    keyMainElement.innerHTML = cipher.keyHTML || "";
    return keyMainElement.innerHTML;
  }
  function changeSelectHTML() {
    selectElement.innerHTML = ciphers.map((cipher) => `<option>${cipher.name}</option>`).join("\n");
  }
  function changeSelectModeHTML() {
    if (selectModeElement !== null) {
      selectModeElement.innerHTML = modes.map((mode) => `<option>${mode.name}</option>`).join("\n");
    }
  }
  function changeCurrentModeToSelected() {
    if (selectModeElement !== null) {
      changeCurrentModeByName(selectModeElement.value);
    }
  }
  function changeCurrentModeByName(name) {
    changeCurrentMode(modes.filter((mode) => mode.name === name)[0]);
  }
  function changeCurrentMode(mode) {
    currentMode = mode;
  }
  function changeOutput() {
    currentMode.changeOutput();
  }
  function encodeOutput() {
    if (!outputElement || !inputElement) {
      return;
    }
    const s = inputElement.value;
    outputElement.innerText = currentCipher.encodeString(s);
  }
  function decodeOutput() {
    if (outputElement && currentCipher.isCanDecode()) {
      outputElement.innerText = currentCipher.decodeString(inputElement.value);
    }
  }
  selectModeElement.addEventListener("change", changeCurrentModeToSelected);
  selectElement.addEventListener("change", changeCipherToSelected);
  inputElement.addEventListener("change", changeOutput);
  inputElement.addEventListener("input", changeOutput);
  keyElement.addEventListener("input", changeOutput);
  changeSelectHTML();
  changeSelectModeHTML();
})();
