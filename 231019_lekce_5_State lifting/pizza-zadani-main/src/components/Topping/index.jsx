import { usePrefs } from '../../prefsContext';
import Check from '../Check';
import './style.css';

const Topping = ({ topping }) => {
  const { veganOnly } = usePrefs();
  return (
    <div className="topping">
      <Check disabled={veganOnly && !topping.vegan} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
