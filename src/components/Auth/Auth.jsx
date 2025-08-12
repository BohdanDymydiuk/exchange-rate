import { useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase';

export const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      onLogin(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      onLogin(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input
        type='email'
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Пароль'
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={register}>Реєстрація</button>
      <button onClick={login}>Вхід</button>
    </div>
  );
};
