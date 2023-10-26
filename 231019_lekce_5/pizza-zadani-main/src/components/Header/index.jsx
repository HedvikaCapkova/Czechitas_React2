import './style.css';
import Check from '../Check';
import { usePrefs } from '../../prefsContext';

const Header = () => {
  const { veganOnly, setVeganOnly } = usePrefs();
  const handleClick = () => {
    setVeganOnly(veganOnly);
  };
  return (
    <div className="container">
      <div className="topping">
        <Check onClick={handleClick} />
        <div className="topping__content">Vegan Only</div>
      </div>
    </div>
  );
};

export default Header;
