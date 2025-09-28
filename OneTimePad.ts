// Code by Utsav Patel
// One-Time Pad Cipher
// Steps:
// 1. Key must be as long as the plaintext.
// 2. Each character is converted to a number A=0..Z=25.
// 3. Encryption: (Plain[i] + Key[i]) mod 26
// 4. Decryption: (Cipher[i] - Key[i] + 26) mod 26
// 5. Key must be truly random and never reused.

function charToNum(ch: string): number {
  return ch.charCodeAt(0) - 65; // A=0 ... Z=25
}

function numToChar(num: number): string {
  return String.fromCharCode((num % 26) + 65);
}

// Encrypt function
function otpEncrypt(plain: string, key: string): string {
  plain = plain.toUpperCase().replace(/[^A-Z]/g, "");
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (plain.length !== key.length) {
    throw new Error("Key length must equal plaintext length for One-Time Pad.");
  }

  let cipher = "";
  for (let i = 0; i < plain.length; i++) {
    const p = charToNum(plain[i]);
    const k = charToNum(key[i]);
    const c = (p + k) % 26;
    cipher += numToChar(c);
  }
  return cipher;
}

// Decrypt function
function otpDecrypt(cipher: string, key: string): string {
  cipher = cipher.toUpperCase().replace(/[^A-Z]/g, "");
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (cipher.length !== key.length) {
    throw new Error("Key length must equal ciphertext length for One-Time Pad.");
  }

  let plain = "";
  for (let i = 0; i < cipher.length; i++) {
    const c = charToNum(cipher[i]);
    const k = charToNum(key[i]);
    const p = (c - k + 26) % 26;
    plain += numToChar(p);
  }
  return plain;
}
