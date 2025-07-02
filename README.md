# 🟩 Wordle Clone — React

A simple Wordle clone built with **React.js**!  
Guess the hidden word within 6 tries. Inspired by the original Wordle by The New York Times.

---

## 📌 **Features**

✅ Play the classic Wordle game in your browser  
✅ 5-letter word puzzle with 6 guesses  
✅ Color-coded feedback:  
- 🟩 Green — correct letter, correct spot  
- 🟨 Yellow — correct letter, wrong spot  
- ⬜ Gray — letter not in the word  
✅ Keyboard input + on-screen keyboard  
✅ Fully responsive — play on desktop & mobile  
✅ Daily word mode *(optional)*  
✅ Light & dark mode *(optional)*

---

## ⚙️ **Tech Stack**

- React.js (Vite or Create React App)
- CSS Modules or Tailwind CSS
- Word list JSON file (or API)

---

## 🗂️ **Project Structure**

```plaintext
wordle-clone/
 ├── public/
 │   ├── index.html
 ├── src/
 │   ├── components/
 │   │   ├── Board.jsx
 │   │   ├── Keyboard.jsx
 │   │   ├── Tile.jsx
 │   ├── App.jsx
 │   ├── index.js
 │   ├── words.js   # Word list
 ├── README.md
 ├── package.json
