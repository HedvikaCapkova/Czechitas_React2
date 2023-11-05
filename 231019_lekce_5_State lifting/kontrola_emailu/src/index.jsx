import { createRoot } from 'react-dom/client';
import './style.css';
import { OrderForm } from './components/EmailInput/OrderForm/OrderForm';

const App = () => {
  return (
    <div className="container">
      <main>
        <OrderForm />
      </main>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
