import * as causer from "./ciphers/causer.js";
import { md5 } from "./ciphers/md5.js";
import * as morse from "./ciphers/morse.js";

const inputElement = <HTMLInputElement>document.getElementById("user-input");
const outputElement = document.getElementById("output");
const keyElement = <HTMLInputElement>document.getElementById("key");
const keyMainElement = document.getElementById("key-main");
const selectElement =
  <HTMLInputElement>document.getElementById("cipher-select");
const selectModeElement =
  <HTMLInputElement>document.getElementById("mode-select");

interface Mode {
  name: string,
  // the function that called after every keyboard hit
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

abstract class Cipher<T = undefined> {
  abstract readonly name: string;
  readonly keyHTML?: string;
  readonly canDecode: boolean = false;

  isCanDecode(): this is DecodableCipher {
    return this.canDecode;
  }

  encodeString(s: string): string {
    return this.encodeStringWithKeys(s, this.getKeys());
  }

  encodeStringWithKeys(_s: string, _keys: T): string {
    throw new Error("<cipher>.encodeStringWithKeys() isn't implemented")
  }

  getKeys(): T {
    throw new Error("<cipher>.encodeStringWithKeys() isn't implemented")
  }
}

abstract class DecodableCipher<T = undefined> extends Cipher<T> {
  readonly canDecode = true;

  decodeString(s: string): string {
    return this.decodeStringWithKeys(s, this.getKeys())
  }

  decodeStringWithKeys(_s: string, _keys: T): string {
    throw new Error("<cipher>.decodeStringWithKeys() isn't implemented")
  }
}

const defaultKeyHTML = `<div class="key">
<label for="key">Ваш пароль, пожалуйста:</label>
<input oninput="changeOutput()" value="0" type="number"
id="key" class="text-input">
</div>`;

class Caesar extends DecodableCipher<number> {
  name = "The Caesar";
  keyHTML = defaultKeyHTML;
  encodeStringWithKeys = causer.encode;
  decodeStringWithKeys = causer.decode;
  getKeys = () => parseInt(keyElement?.value) || 0;
}

class Morse extends DecodableCipher {
  name = "The Morse";
  encodeString = morse.encode;
  decodeString = morse.decode;
}

class MD5 extends Cipher {
  name = "MD5";
  encodeString = md5;
}

type AppCipher = Cipher<number> | Cipher;

const ciphers: Array<AppCipher> = [
  new Caesar(),
  new Morse(),
  new MD5(),
];

let currentCipher = ciphers[0];

function changeCipherToSelected() {
  changeCurrentCipherByName(selectElement?.value);
}

function changeCurrentCipherByName(cipherName: string): AppCipher {
  return changeCurrentCipher(ciphers
    .filter(cipher => cipherName === cipher.name)[0]);
}

function changeCurrentCipher(newCipher: AppCipher): AppCipher {
  currentCipher = newCipher;
  changeKeysHTMLByCipher(newCipher);
  changeOutput();
  return currentCipher;
}

function changeKeysHTMLByCipher(cipher: AppCipher): string | undefined {
  if (!keyMainElement) {
    return undefined;
  }
  keyMainElement.innerHTML = cipher.keyHTML || "";
  return keyMainElement.innerHTML;
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
keyElement.addEventListener("input", changeOutput)

changeSelectHTML();
changeSelectModeHTML();
