// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your Firebase config here
// const firebaseConfig = {
//    apiKey: 'YOUR_API_KEY',
//    authDomain: 'YOUR_AUTH_DOMAIN',
//    projectId: 'YOUR_PROJECT_ID',
//    storageBucket: 'YOUR_STORAGE_BUCKET',
//    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//    appId: 'YOUR_APP_ID',
//  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };