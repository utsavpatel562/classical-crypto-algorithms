// Code by Utsav Patel

import * as readline from "readline";

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for plain text
rl.question("Enter Plain Text = ", (plain: string) => {
  // Ask user for the key
  rl.question("Enter the key = ", (keyInput: string) => {
    const key: number = parseInt(keyInput); // Convert key to integer

    // ENCRYPTION LOGIC
    let cipher: string = "";
    for (let i = 0; i < plain.length; i++) {
      let ch: string = plain[i];

      // If character is uppercase (A-Z)
      if (ch >= "A" && ch <= "Z") {
        cipher += String.fromCharCode(
          ((ch.charCodeAt(0) - 65 + key) % 26) + 65
        );
      }
      // If character is lowercase (a-z)
      else if (ch >= "a" && ch <= "z") {
        cipher += String.fromCharCode(
          ((ch.charCodeAt(0) - 97 + key) % 26) + 97
        );
      }
      // If it's not a letter (symbols, numbers, spaces)
      else {
        cipher += ch;
      }
    }
    console.log("Encrypted Text =", cipher);

    // DECRYPTION LOGIC
    let decrypted: string = "";
    for (let i = 0; i < cipher.length; i++) {
      let ch: string = cipher[i];

      // If character is uppercase (A-Z)
      if (ch >= "A" && ch <= "Z") {
        decrypted += String.fromCharCode(
          ((ch.charCodeAt(0) - 65 - key + 26) % 26) + 65
        );
      }
      // If character is lowercase (a-z)
      else if (ch >= "a" && ch <= "z") {
        decrypted += String.fromCharCode(
          ((ch.charCodeAt(0) - 97 - key + 26) % 26) + 97
        );
      }
      // If it's not a letter
      else {
        decrypted += ch;
      }
    }
    console.log("Decryption is =", decrypted);

    rl.close(); // Close input
  });
});
