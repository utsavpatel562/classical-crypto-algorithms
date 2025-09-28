// Code by Utsav Patel
// Shift Cipher Algorithm
// Encryption: C = (P + n) mod 26
// Decryption: P = (C - n + 26) mod 26

import * as readline from "readline";

// Convert character → number (A=0, B=1, ..., Z=25)
function charToNum(ch: string): number {
  if (/[A-Z]/.test(ch)) {
    return ch.charCodeAt(0) - 65;
  } else if (/[a-z]/.test(ch)) {
    return ch.charCodeAt(0) - 97;
  }
  return -1; // Non-alphabet
}

// Convert number → character
function numToChar(num: number, isUpper: boolean): string {
  if (isUpper) {
    return String.fromCharCode((num % 26) + 65);
  } else {
    return String.fromCharCode((num % 26) + 97);
  }
}

// Encryption
function shiftEncrypt(plain: string, key: number): string {
  let result = "";
  for (const ch of plain) {
    if (/[A-Z]/.test(ch)) {
      result += numToChar((charToNum(ch) + key) % 26, true);
    } else if (/[a-z]/.test(ch)) {
      result += numToChar((charToNum(ch) + key) % 26, false);
    } else {
      result += ch; // keep spaces/symbols
    }
  }
  return result;
}

// Decryption
function shiftDecrypt(cipher: string, key: number): string {
  let result = "";
  for (const ch of cipher) {
    if (/[A-Z]/.test(ch)) {
      result += numToChar((charToNum(ch) - key + 26) % 26, true);
    } else if (/[a-z]/.test(ch)) {
      result += numToChar((charToNum(ch) - key + 26) % 26, false);
    } else {
      result += ch;
    }
  }
  return result;
}

// Setup readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Start program
rl.question("Enter Plain Text: ", (plainText) => {
  rl.question("Enter Key (0–25): ", (keyInput) => {
    const key = parseInt(keyInput);

    // Encrypt
    const encrypted = shiftEncrypt(plainText, key);
    console.log("\n Encrypted Text:", encrypted);

    // Decrypt
    const decrypted = shiftDecrypt(encrypted, key);
    console.log("Decrypted Text:", decrypted);

    rl.close();
  });
});
