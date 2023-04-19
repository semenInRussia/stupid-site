let alphabetString =
  "qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?/;'[].,!@#$%^&*()_+\\=-|`йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИИТЬ╔";
let alphabetOfCaesar = alphabetString.split("");
let alphabetOfCaesarLength = alphabetOfCaesar.length;

export function decode(string: string, key: number): string {
  return encode(string, -key)
}

export function encode(string: string, key: number): string {
  let chars = string.split("")
    .map(char => alphabetOfCaesar.indexOf(char))
    .map(indexOfChar => indexOfChar + key)
    .map(Math.abs)
    .map(indexOfChar => indexOfChar % alphabetOfCaesarLength)
    .map(indexOfChar => alphabetOfCaesar[indexOfChar]);

  return charsToString(chars);
}

function charsToString(chars: string[]): string {
  return chars.join("")
}
