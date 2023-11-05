export const EmailInput = ({ email, onChange }) => {
  const handleChange = (e) => {
    const data = {
      value: e,
      valid: email.includes('@'),
    };
    onChange(data);
  };

  return (
    <div className="validated-input">
      <input
        type="email"
        value={email}
        onChange={(e) => handleChange(e.target.value)}
      />
      {email.includes('@') ? null : (
        <div className="invalid-msg">Invalid email address</div>
      )}
    </div>
  );
};
