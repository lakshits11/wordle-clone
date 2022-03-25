import { useContext } from 'react';
import { AppContext } from '../App';

const Key = ({ keyValue, bigKey, disabled, almost, correct }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === '⏎') {
      onEnter();
    } else if (keyValue === '⌫') {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={
        bigKey
          ? 'big'
          : disabled
          ? 'disabled'
          : correct
          ? 'correct'
          : almost && 'almost'
      }
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
};

export default Key;
