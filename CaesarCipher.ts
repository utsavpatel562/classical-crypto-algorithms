// Code by Utsav Patel
// Caesar Cipher

function encryptCaesar(plaintext: string, shift: number): string {
  const A = "A".charCodeAt(0); // ASCII for A
  const Z = "Z".charCodeAt(0); // ASCII for Z
  const a = "a".charCodeAt(0); // ASCII for a
  const z = "z".charCodeAt(0); // ASCII for z

  let result = "";

  for (let char of plaintext) {
    let code = char.charCodeAt(0);

    if (code >= A && code <= Z) {
      // Uppercase letters
      result += String.fromCharCode(((code - A + shift) % 26) + A);
    } else if (code >= a && code <= z) {
      // Lowercase letters
      result += String.fromCharCode(((code - a + shift) % 26) + a);
    } else {
      // Non-alphabetical characters stay the same
      result += char;
    }
  }

  return result;
}

function decryptCaesar(ciphertext: string, shift: number): string {
  // Decryption is just shifting backwards
  return encryptCaesar(ciphertext, (26 - (shift % 26)) % 26);
}

// Example usage
const plaintext = "COMPUTER AND NETWORK SECURITY";
const key = 3;

const encrypted = encryptCaesar(plaintext, key);
console.log("Encrypted:", encrypted); // FRPSXWHU DQG QHWZRUN VHFXULWB

const decrypted = decryptCaesar(encrypted, key);
console.log("Decrypted:", decrypted); // COMPUTER AND NETWORK SECURITY
