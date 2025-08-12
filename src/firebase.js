import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBxqFI7wQaebOiu84KvLuFOdo9ko2zvWXE',
  authDomain: 'exchange-rate-561c1.firebaseapp.com',
  projectId: 'exchange-rate-561c1',
  storageBucket: 'exchange-rate-561c1.firebasestorage.app',
  messagingSenderId: '158458648915',
  appId: '1:158458648915:web:12231ed1409d95790429a6',
  measurementId: 'G-XWN3YZF22T',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
