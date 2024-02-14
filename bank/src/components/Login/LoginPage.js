import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Basic validation, you may want to add more robust checks
    if (username === 'bentab1' && password === '12345678') {
      // For personal account
      onLogin(username, 'personal');
    } else if (username === 'bentab2' && password === '12345678') {
      // For business account
      onLogin(username, 'business');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </label>
      <br />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
