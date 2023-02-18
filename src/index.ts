const inputElement = <HTMLInputElement>document.getElementById("user-input");
const outputElement = document.getElementById("output");
const keyElement = <HTMLInputElement>document.getElementById("key");
const keyMainElement = document.getElementById("key-main");
const selectElement = <HTMLInputElement>document.getElementById(
  "cipher-select");
const selectModeElement = <HTMLInputElement>document.getElementById(
  "mode-select");

interface Mode {
  name: string,
  changeOutput: () => void,
}

const modes: Mode[] = [
  {
    name: "Зашифровать",
    changeOutput: encodeOutput
  },
  {
    name: "Расшифровать",
    changeOutput: decodeOutput
  },
];

let currentMode: Mode = modes[0];

interface Cipher {
  name: string,
  keyHTML?: string,
  encode: (s: string, ...any: any[]) => string,
  inputForEncode?: () => any[] | undefined,
  decode?: (s: string, ...any: any[]) => string,
  inputForDecode?: () => any[] | undefined,
}

const defaultCipherData = {
  keyHTML: `<div class="key">
<label for="key">Ваш пароль, пожалуйста:</label>
<input
oninput="changeOutput()"
value="0"
type="number"
id="key" class="text-input">
</div>`
};

import * as causer from "./ciphers/causer.js";
import { md5 } from "./ciphers/md5.js";
import * as morse from "./ciphers/morse.js";

const ciphers: Cipher[] = [
  {
    name: "The Caesar",
    encode: causer.encode,
    decode: causer.decode,
    keyHTML: defaultCipherData.keyHTML,
    inputForEncode: () => [parseInt(keyElement?.value) || 0],
  },
  {
    name: "The Morse",
    encode: morse.encode,
    decode: morse.decode,
    keyHTML: "",
    inputForEncode: () => [],
    inputForDecode: () => undefined
  },
  {
    name: "MD5",
    encode: md5,
    keyHTML: "",
  },
  {
    name: "For Tests",
    encode: x => x,
    decode: x => x,
    keyHTML: "",
  }
];

let currentCipher = ciphers[0];

function changeCipherToSelected() {
  changeCurrentCipherByName(selectElement?.value);
}

function changeCurrentCipherByName(cipherName: string) {
  changeCurrentCipher(ciphers
    .filter(cipher => cipherName === cipher.name)[0]);
}

function changeCurrentCipher(newCipher: Cipher) {
  currentCipher = newCipher;
  changeKeysHTMLByCipher(newCipher);
  changeOutput();
}

function changeKeysHTMLByCipher(cipher: Cipher) {
  if (keyMainElement !== null) {
    if (cipher.keyHTML === "") {
      keyMainElement.innerHTML = ""
    } else {
      keyMainElement.innerHTML = cipher.keyHTML || defaultCipherData.keyHTML;
    }
  }
}

function changeSelectHTML() {
  selectElement.innerHTML = ciphers
    .map(cipher => `<option>${cipher.name}</option>`)
    .join("\n");
}

function changeSelectModeHTML() {
  if (selectModeElement !== null) {
    selectModeElement.innerHTML = modes
      .map(mode => `<option>${mode.name}</option>`)
      .join("\n");
  }
}

function changeCurrentModeToSelected() {
  if (selectModeElement !== null) {
    changeCurrentModeByName(selectModeElement.value);
  }
}

function changeCurrentModeByName(name: string) {
  changeCurrentMode(modes.filter(mode => mode.name === name)[0]);
}

function changeCurrentMode(mode: Mode) {
  currentMode = mode;
}

function changeOutput() {
  currentMode.changeOutput();
}

function encodeOutput() {
  let keys: any[];
  if (currentCipher.inputForEncode) {
    keys = currentCipher.inputForEncode() || [];
  } else {
    keys = [];
  }
  const encode = currentCipher.encode;
  if (outputElement !== null && inputElement !== null) {
    keys = keys || [];
    outputElement.innerText = encode(inputElement.value, ...keys);
  }
}

function decodeOutput() {
  if (currentCipher) {
    const fetchKeys = currentCipher.inputForDecode
      || currentCipher.inputForEncode
      || (() => []);
    let keys: any = fetchKeys();
    const decode = currentCipher.decode;
    if (outputElement !== null && decode) {
      outputElement.innerText = decode(inputElement.value, ...keys);
    }
  }
}

selectModeElement.addEventListener("change", changeCurrentModeToSelected);
selectElement.addEventListener("change", changeCipherToSelected);
inputElement.addEventListener("change", changeOutput);
inputElement.addEventListener("input", changeOutput);
keyElement.addEventListener("input", changeOutput)

changeSelectHTML();
changeSelectModeHTML();
