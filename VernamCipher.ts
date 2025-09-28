// Code by Utsav Patel
// Vernam Cipher
// Steps:
// 1. Assign numbers to characters: A=0, B=1, ..., Z=25.
// 2. Cipher[i] = (Plain[i] + Key[i]) mod 26
// 3. Decryption: Plain[i] = (Cipher[i] - Key[i] + 26) mod 26
// Note: Key length must equal plaintext length.

function charToNum(ch: string): number {
  return ch.charCodeAt(0) - 65; // A=0 ... Z=25
}

function numToChar(num: number): string {
  return String.fromCharCode((num % 26) + 65);
}

// Encryption
function vernamEncrypt(plain: string, key: string): string {
  plain = plain.toUpperCase().replace(/[^A-Z]/g, "");
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (plain.length !== key.length) {
    throw new Error("Key length must match plaintext length for Vernam Cipher.");
  }

  let cipher = "";
  for (let i = 0; i < plain.length; i++) {
    const p = charToNum(plain[i]);
    const k = charToNum(key[i]);
    const c = (p + k) % 26; // modulo 26
    cipher += numToChar(c);
  }
  return cipher;
}

// Decryption
function vernamDecrypt(cipher: string, key: string): string {
  cipher = cipher.toUpperCase().replace(/[^A-Z]/g, "");
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (cipher.length !== key.length) {
    throw new Error("Key length must match ciphertext length for Vernam Cipher.");
  }

  let plain = "";
  for (let i = 0; i < cipher.length; i++) {
    const c = charToNum(cipher[i]);
    const k = charToNum(key[i]);
    const p = (c - k + 26) % 26; // ensure positive
    plain += numToChar(p);
  }
  return plain;
}
