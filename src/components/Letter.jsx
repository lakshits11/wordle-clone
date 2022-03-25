import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPosition, attemptValue }) => {
  const {
    board,
    correctWord,
    setCorrectWord,
    currentAttempt,
    setDisabledLetters,
    setCorrectLetters,
    setAlmostLetters,
  } = useContext(AppContext);
  let crctWord = correctWord;

  const letter = board[attemptValue][letterPosition];
  const correct = crctWord.toUpperCase()[letterPosition] === letter;
  const almost = !correct && letter !== '' && crctWord.toUpperCase().includes(letter);
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    if (letter !== '' && correct && !almost) {
      setCorrectLetters((prev) => [...prev, letter]);
    }
    if (almost) {
      setAlmostLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
