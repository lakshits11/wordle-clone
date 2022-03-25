import { useContext } from 'react';
import { AppContext } from '../App';

const GameOver = () => {
  const { gameOver, correctWord, currentAttempt } = useContext(AppContext);
  console.log('GameOver.jsx > guessedWord: ', gameOver.guessedWord);
  return (
    <div className="gameover">
      <h3>
        {gameOver.guessedWord ? 'Yay, You Won :)' : 'Better Luck Next Time :('}
      </h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed the correct word in {currentAttempt.attempt} attemps.</h3>
      )}
    </div>
  );
};

export default GameOver;
