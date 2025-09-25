// COde by Utsav Patel
// Vigenere Cipher in TypeScript
// Encryption and Decryption implementation

import * as readline from "readline";

// Function to repeat key so its length = plaintext length
function generateKey(plaintext: string, key: string): string {
  let newKey = "";
  for (let i = 0, j = 0; i < plaintext.length; i++) {
    const ch = plaintext[i];
    if (/[a-zA-Z]/.test(ch)) {
      newKey += key[j % key.length];
      j++;
    } else {
      newKey += ch; // keep spaces/symbols unchanged
    }
  }
  return newKey;
}

// Encryption
function vigenereEncrypt(plaintext: string, key: string): string {
  let result = "";
  const newKey = generateKey(plaintext, key);

  for (let i = 0; i < plaintext.length; i++) {
    const ch = plaintext[i];
    const k = newKey[i];

    if (/[A-Z]/.test(ch)) {
      // Uppercase letters
      const a = ch.charCodeAt(0) - 65;
      const b = k.toUpperCase().charCodeAt(0) - 65;
      const enc = (a + b) % 26;
      result += String.fromCharCode(enc + 65);
    } else if (/[a-z]/.test(ch)) {
      // Lowercase letters
      const a = ch.charCodeAt(0) - 97;
      const b = k.toLowerCase().charCodeAt(0) - 97;
      const enc = (a + b) % 26;
      result += String.fromCharCode(enc + 97);
    } else {
      result += ch; // Non-alphabetic chars unchanged
    }
  }

  return result;
}

// Decryption
function vigenereDecrypt(ciphertext: string, key: string): string {
  let result = "";
  const newKey = generateKey(ciphertext, key);

  for (let i = 0; i < ciphertext.length; i++) {
    const ch = ciphertext[i];
    const k = newKey[i];

    if (/[A-Z]/.test(ch)) {
      // Uppercase letters
      const a = ch.charCodeAt(0) - 65;
      const b = k.toUpperCase().charCodeAt(0) - 65;
      const dec = (a - b + 26) % 26;
      result += String.fromCharCode(dec + 65);
    } else if (/[a-z]/.test(ch)) {
      // Lowercase letters
      const a = ch.charCodeAt(0) - 97;
      const b = k.toLowerCase().charCodeAt(0) - 97;
      const dec = (a - b + 26) % 26;
      result += String.fromCharCode(dec + 97);
    } else {
      result += ch; // Non-alphabetic chars unchanged
    }
  }

  return result;
}

// Setup readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Default key used in your C code
const defaultKey = "SSPC";

rl.question("Enter Plain Text: ", (plainText) => {
  const encrypted = vigenereEncrypt(plainText, defaultKey);
  console.log("\n Key Used: ", generateKey(plainText, defaultKey));
  console.log("Encrypted Text: ", encrypted);

  const decrypted = vigenereDecrypt(encrypted, defaultKey);
  console.log("Decrypted Text: ", decrypted);

  rl.close();
});
