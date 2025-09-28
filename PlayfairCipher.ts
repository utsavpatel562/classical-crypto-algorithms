// Code by Utsav Patel
// Playfair Cipher
// Steps:
// 1. Create 5x5 key matrix (I/J are treated as the same).
// 2. Break message into digraphs (pairs of characters).
// 3. Apply encryption rules (same row, same column, rectangle rule).
// 4. Decrypt by reversing rules.

function createMatrix(key: string): string[][] {
  key = key.toUpperCase().replace(/J/g, "I"); // merge I/J
  let seen = new Set<string>();
  let matrixString = "";

  // Add key characters first
  for (const ch of key) {
    if (/[A-Z]/.test(ch) && !seen.has(ch)) {
      matrixString += ch;
      seen.add(ch);
    }
  }

  // Add remaining alphabet
  for (let ch = 65; ch <= 90; ch++) {
    let char = String.fromCharCode(ch);
    if (char === "J") continue; // skip J
    if (!seen.has(char)) {
      matrixString += char;
      seen.add(char);
    }
  }

  // Convert into 5x5 matrix
  const matrix: string[][] = [];
  for (let i = 0; i < 25; i += 5) {
    matrix.push(matrixString.slice(i, i + 5).split(""));
  }

  return matrix;
}

// Find position of a character in the matrix
function findPosition(matrix: string[][], ch: string): [number, number] {
  if (ch === "J") ch = "I"; // handle I/J
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (matrix[row][col] === ch) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
}

// Prepare plaintext into digraphs
function prepareText(text: string): string[] {
  text = text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");

  let digraphs: string[] = [];
  let i = 0;
  while (i < text.length) {
    let a = text[i];
    let b = i + 1 < text.length ? text[i + 1] : "X";

    if (a === b) {
      digraphs.push(a + "X");
      i++;
    } else {
      digraphs.push(a + b);
      i += 2;
    }
  }

  return digraphs;
}

// Encryption
function playfairEncrypt(plain: string, key: string): string {
  const matrix = createMatrix(key);
  const digraphs = prepareText(plain);
  let result = "";

  for (const pair of digraphs) {
    const [a, b] = pair.split("");
    const [rowA, colA] = findPosition(matrix, a);
    const [rowB, colB] = findPosition(matrix, b);

    if (rowA === rowB) {
      // same row → shift right
      result += matrix[rowA][(colA + 1) % 5];
      result += matrix[rowB][(colB + 1) % 5];
    } else if (colA === colB) {
      // same column → shift down
      result += matrix[(rowA + 1) % 5][colA];
      result += matrix[(rowB + 1) % 5][colB];
    } else {
      // rectangle rule
      result += matrix[rowA][colB];
      result += matrix[rowB][colA];
    }
  }

  return result;
}

// Decryption
function playfairDecrypt(cipher: string, key: string): string {
  const matrix = createMatrix(key);
  const digraphs = prepareText(cipher);
  let result = "";

  for (const pair of digraphs) {
    const [a, b] = pair.split("");
    const [rowA, colA] = findPosition(matrix, a);
    const [rowB, colB] = findPosition(matrix, b);

    if (rowA === rowB) {
      // same row → shift left
      result += matrix[rowA][(colA + 4) % 5];
      result += matrix[rowB][(colB + 4) % 5];
    } else if (colA === colB) {
      // same column → shift up
      result += matrix[(rowA + 4) % 5][colA];
      result += matrix[(rowB + 4) % 5][colB];
    } else {
      // rectangle rule
      result += matrix[rowA][colB];
      result += matrix[rowB][colA];
    }
  }

  return result;
}
