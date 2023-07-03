import React, { useState } from 'react';
import { userService } from '../services/userService';

const UserRegistration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userService.register({ username, password, email });
      setUsername('');
      setPassword('');
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="userRegistrationForm">
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserRegistration;