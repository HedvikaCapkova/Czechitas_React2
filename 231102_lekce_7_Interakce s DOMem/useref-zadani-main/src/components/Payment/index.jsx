import { useState, useRef, useEffect } from 'react';

const Payment = () => {
  const [cardInputVisible, setCardInputVisible] = useState(false);
  const cardInputRef = useRef();
  const handlePay = () => setCardInputVisible(true);

  useEffect(() => {
    if (cardInputVisible) {
      cardInputRef.current.focus();
    }
  }, [cardInputVisible]);

  return (
    <div className="payment">
      <h2>Payment</h2>
      <button onClick={handlePay}>Zaplatit</button>
      {cardInputVisible ? (
        <input
          type="text"
          ref={cardInputRef}
        />
      ) : null}
    </div>
  );
};

export default Payment;
