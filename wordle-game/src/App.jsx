import React, { useState, useEffect } from 'react';

const Wordle = () => {
  const words = [
    "apple", "grape", "brave", "stone", "plain",
    "crane", "slice", "bring", "ghost", "light",
    "frost", "trick", "flame", "blink", "crown",
    "shiny", "spice", "track", "sugar", "wrist",
    "flock", "glory", "pride", "storm", "whale"
  ];

  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [attemptNumber, setAttemptNumber] = useState(0);
  const maxAttempts = 6;
  const wordLength = 5;

  useEffect(() => {
    const index = Math.floor(Math.random() * words.length);
    setWord(words[index]);
    console.log(words[index])
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (attemptNumber >= maxAttempts) return;

      const key = e.key;

      if (key === 'Backspace') {
        setCurrentGuess(prev => prev.slice(0, -1));
      } else if (key === 'Enter') {
        if (currentGuess.length === word.length) {
          setGuesses(prev => [...prev, currentGuess]);
          setCurrentGuess('');
          setAttemptNumber(prev => prev + 1);
        }
      } else if (/^[a-zA-Z]$/.test(key)) {
        if (currentGuess.length < wordLength) {
          setCurrentGuess(prev => prev + key.toLowerCase());
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, attemptNumber, word.length]);

  const rows = [];
  for (let i = 0; i < maxAttempts; i++) {
    if (i < guesses.length) {
      rows.push(guesses[i].split(''));
    } else if (i === guesses.length) {
      const letters = currentGuess.split('');
      while (letters.length < wordLength) letters.push('');
      rows.push(letters);
    } else {
      rows.push(Array(wordLength).fill(''));
    }
  }
  const isCorrect = guesses.includes(word);
  const isGameOver = attemptNumber >= maxAttempts && !isCorrect;
  return (
    <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center' , justifyContent:'center', fontWeight:'900', fontSize:'25px'}}>
      <h1>Wordle</h1>
      <h2>A Daily Word Game</h2>
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          {row.map((letter, j) => {
            let backgroundColor = '#292929';

            if (i < guesses.length) {
              if (word[j] === letter) {
                backgroundColor = 'green';
              } else if (word.includes(letter)) {
                backgroundColor = 'goldenrod';
              } else {
                backgroundColor = '#444';
              }
            }

            return (
              <div
                key={j}
                style={{
                  background: backgroundColor,
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: 'larger',
                  color: 'white',
                  borderRadius: '6px',
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
      {isCorrect && <h3 style={{ color: 'green' }}> Correct! The word was "{word.toUpperCase()}"</h3>}
      {isGameOver && <h3 style={{ color: 'red' }}> Game Over! The word was "{word.toUpperCase()}"</h3>}
    </div>
  );
};

export default Wordle;
