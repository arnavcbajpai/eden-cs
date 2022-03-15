// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDP0Q6rezFVUCjwrlv-v3sbhYbM8UK_H0c',
  authDomain: 'edencs-a98b4.firebaseapp.com',
  projectId: 'edencs-a98b4',
  storageBucket: 'edencs-a98b4.appspot.com',
  messagingSenderId: '361881014511',
  appId: '1:361881014511:web:c18dae201faff7d1630b1a',
  measurementId: 'G-N9W60M7P10',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
