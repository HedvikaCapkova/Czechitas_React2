import React, { useRef, useState } from 'react';

export const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const [emailError, setEmailError] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const emailValue = useRef(null);
  const usernameValue = useRef(null);
  const passwordValue = useRef(null);
  const passwordConfirmValue = useRef(null);

  const checkEmail = () => {
    if (user.email.includes('@')) {
      handleUsername();
      setEmailError('');
    } else {
      setEmailError('Invalid email');
    }
  };

  const handleUsername = () => {
    !user.username &&
      setUser({
        ...user,
        username: user.email.split('@')[0],
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirm && emailError === '') {
      setUser({
        email: user.email,
        username: user.username,
        password: user.password,
        passwordConfirm: user.passwordConfirm,
      });
      console.log(user);
      setRegistrationMessage('Registration successful');
      setUser({
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
      });
    } else {
      setRegistrationMessage('Passwords do not match');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email Address"
          type="email"
          value={user.email}
          ref={emailValue}
          onChange={() => {
            setUser({ ...user, email: emailValue?.current.value });
          }}
          onBlur={() => {
            checkEmail();
          }}
        />
        <input
          placeholder="Username"
          type="text"
          value={user.username}
          ref={usernameValue}
          onChange={() =>
            setUser({ ...user, username: usernameValue?.current.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          value={user.password}
          ref={passwordValue}
          onChange={() =>
            setUser({ ...user, password: passwordValue?.current.value })
          }
        />
        <input
          placeholder="Confirm Password"
          type="password"
          value={user.passwordConfirm}
          ref={passwordConfirmValue}
          onChange={() =>
            setUser({
              ...user,
              passwordConfirm: passwordConfirmValue?.current.value,
            })
          }
        />
        <button
          disabled={
            !(
              user.email &&
              user.username &&
              user.password &&
              user.passwordConfirm
            )
          }
          type="submit">
          Register
        </button>
      </form>
      {emailError && <div>{emailError}</div>}
      {registrationMessage && <div>{registrationMessage}</div>}
    </div>
  );
};
