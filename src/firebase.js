
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw5BGzXVFRU8QgrcaE2efRe521voEzjeI",
  authDomain: "psychologists-services-68f26.firebaseapp.com",
  databaseURL: "https://psychologists-services-68f26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-68f26",
  storageBucket: "psychologists-services-68f26.appspot.com",
  messagingSenderId: "318736879149",
  appId: "1:318736879149:web:3366baeafc17008baa72a4",
  measurementId: "G-ZPTBYHYL11",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);