import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  // apiKey: "AIzaSyBw5BGzXVFRU8QgrcaE2efRe521voEzjeI",
  // authDomain: "psychologists-services-68f26.firebaseapp.com",
  // databaseURL: "https://psychologists-services-68f26-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "psychologists-services-68f26",
  // storageBucket: "psychologists-services-68f26.appspot.com",
  // messagingSenderId: "318736879149",
  // appId: "1:318736879149:web:3366baeafc17008baa72a4",
  // measurementId: "G-ZPTBYHYL11",

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATA_BASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
