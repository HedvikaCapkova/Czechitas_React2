import { Form } from 'formik';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Registrační formulář</h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
};
