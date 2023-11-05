import { useState } from 'react';
import './style.css';

const Check = ({ disabled, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    if (disabled) {
      return;
    }
    const newChecked = !checked;
    setChecked(!checked);
    onChange(newChecked);
  };
  return (
    <button
      className={`check ${disabled ? 'check--disabled' : ''}`}
      onClick={handleClick}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
