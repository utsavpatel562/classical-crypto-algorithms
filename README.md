# 🔐 Classical Cryptography Algorithms  

This repository contains implementations of various **classical cryptography algorithms** in **JavaScript/TypeScript**.  
These algorithms are historical ciphers that formed the foundation of **modern cryptography**.  

---

## 📖 Algorithms Implemented  

| Algorithm         | Description                                                                 | Example                          |
|-------------------|-----------------------------------------------------------------------------|----------------------------------|
| Caesar Cipher     | Shifts each letter by a fixed key value.                                   | HELLO → (key=3) → KHOOR          |
| Shift Cipher      | Generalized Caesar Cipher, works with both uppercase and lowercase letters.| hello → (key=5) → mjqqt          |
| Hill Cipher       | Uses **matrix multiplication + modular arithmetic** to encrypt text.       | Uses 2x2 or 3x3 key matrices     |
| Playfair Cipher   | Encrypts digraphs (pairs of letters) using a 5x5 key matrix.               | HELLO → HE LX LO (key-based grid)|
| Vernam Cipher     | Bitwise XOR between plaintext and key.                                     | A(65) + K(75) = 10               |
| Vigenère Cipher   | Polyalphabetic cipher using a keyword.                                     | ATTACKATDAWN + LEMON → LXFOPV... |
| One-Time Pad      | Unbreakable cipher if key = random, unique, and as long as plaintext.      | Perfect secrecy guaranteed       |

---

## ⚙️ Installation & Usage  

Clone the repository:  

```bash
git clone https://github.com/utsavpatel562/classical-crypto-algorithms.git
cd classical-crypto-algorithms
```

Run any file with Node.js:
```bash
node CaesarCipher.ts
```

### 📂 Project Structure
```bash
📁 classical-crypto-algorithms
│── CaesarCipher.ts
│── ShiftCipher.ts
│── HillCipher.ts
│── PlayfairCipher.ts
│── VernamCipher.ts
│── VigenereCipher.ts
│── OneTimePad.ts
│── README.md
```

### 🎯 Learning Objectives
✔️ Understand classical encryption algorithms  
✔️ Compare strengths & weaknesses of each cipher  
✔️ Learn how these methods influenced modern cryptography  

### 🤝 Contributing
Contributions are welcome 🚀  

You can:  
- Add more cipher algorithms  
- Improve code performance  
- Write test cases  

Steps:  
1. Fork the repo  
2. Create a feature branch  
3. Submit a pull request  

### 📜 License
This project is licensed under the MIT License.  
You are free to use, modify, and distribute this code.  
