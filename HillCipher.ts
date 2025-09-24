// Code by Utsav Patel
// Hill Cipher in TypeScript (3x3 Matrix Version)
// Implements encryption and partial decryption logic

import * as readline from "readline";

// Alphabet mapping
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Function to remove spaces and pad text with 'x'
function preprocessText(text: string): string {
  let cleanText = text.replace(/\s+/g, "").toLowerCase();
  // Add dummy characters so length % 3 == 0
  while (cleanText.length % 3 !== 0) {
    cleanText += "x";
  }
  return cleanText;
}

// Convert character to number (a=0 ... z=25)
function charToNum(ch: string): number {
  return alphabet.indexOf(ch);
}

// Convert number to character
function numToChar(num: number): string {
  return alphabet[num % 26];
}

// Hill Cipher Encryption
function hillEncrypt(plain: string, keyMatrix: number[][]): string {
  let result = "";
  for (let i = 0; i < plain.length; i += 3) {
    const block = [
      charToNum(plain[i]),
      charToNum(plain[i + 1]),
      charToNum(plain[i + 2]),
    ];

    const encryptedBlock = [0, 0, 0];
    for (let row = 0; row < 3; row++) {
      let sum = 0;
      for (let col = 0; col < 3; col++) {
        sum += keyMatrix[row][col] * block[col];
      }
      encryptedBlock[row] = sum % 26;
    }

    result += encryptedBlock.map(numToChar).join("");
  }
  return result;
}

// TODO: Implement full decryption (matrix inverse mod 26)
// For now, just structure the function
function hillDecrypt(cipher: string, keyMatrix: number[][]): string {
  // In real implementation:
  // 1. Compute determinant of keyMatrix
  // 2. Find modular inverse of determinant mod 26
  // 3. Compute adjugate matrix
  // 4. Multiply adjugate * determinantInverse mod 26
  // 5. Multiply cipher blocks with inverse matrix
  return "Decryption function not fully implemented yet.";
}

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Start program
rl.question("Enter plain text: ", (plainText) => {
  rl.question("Enter 9 values for 3x3 key matrix (space separated): ", (matrixInput) => {
    const values = matrixInput.trim().split(/\s+/).map(Number);
    if (values.length !== 9) {
      console.log("Error: You must enter exactly 9 numbers for the matrix.");
      rl.close();
      return;
    }

    // Build 3x3 key matrix
    const keyMatrix: number[][] = [
      [values[0], values[1], values[2]],
      [values[3], values[4], values[5]],
      [values[6], values[7], values[8]],
    ];

    // Preprocess text
    const processedText = preprocessText(plainText);

    // Encrypt
    const encrypted = hillEncrypt(processedText, keyMatrix);
    console.log("Encrypted Text:", encrypted);

    // Decrypt (stub)
    const decrypted = hillDecrypt(encrypted, keyMatrix);
    console.log("Decrypted Text (not fully implemented):", decrypted);

    rl.close();
  });
});
