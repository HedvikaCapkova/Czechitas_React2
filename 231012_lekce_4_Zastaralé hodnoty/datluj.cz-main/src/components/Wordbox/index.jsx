import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    if (lettersLeft[0] === e.key) {
      const newLettersLeft = lettersLeft.substring(1);
      setLettersLeft(newLettersLeft);
      console.log(newLettersLeft);
      console.log(e.key);
      setMistake(false);
      if (newLettersLeft.length === 0) {
        onFinish();
        console.log('finish');
      }
    } else {
      setMistake(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);

  return (
    <div className={`wordbox ${mistake && 'wordbox--mistake'}`}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
