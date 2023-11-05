import { useState } from 'react';
import { EmailInput } from '../EmailInput';

export const OrderForm = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const handleChange = (data) => {
    setEmail(data.value);
    setValid(data.valid);
  };

  return (
    <form>
      <EmailInput
        email={email}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={!valid}>
        Submit
      </button>
    </form>
  );
};
