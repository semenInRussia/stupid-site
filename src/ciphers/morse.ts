interface Dict {
  [char: string]: string;
}

const alphabetOfMorse: Dict = {
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
  " ": "  ",
};

export function encode(s: string): string {
  const encodeChar = (ch: string) => alphabetOfMorse[ch] || ch;
  return s.toLowerCase().split("").map(encodeChar).join(" ");
}

export function decode(s: string): string {
  const alphabet = reverseAlphabet(alphabetOfMorse);
  const decodeWord = (w: string) =>
    w.split(" ").map((ch) => alphabet[ch] || ch);
  const words = s.toLowerCase().split("  ");
  return words.map(decodeWord).join(" ");
}

function reverseAlphabet(originalAlphabet: Dict): Dict {
  let alphabet: Dict = {};
  const keys = Object.keys(originalAlphabet);
  for (const originalKey of keys) {
    const value: string = originalAlphabet[originalKey];
    alphabet[value] = originalKey;
  }
  return alphabet;
}
