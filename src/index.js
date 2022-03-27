import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
// import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyBX881xfHxNoidu3BJ7fbmoavcI64vee-k",
  authDomain: "hostel-app-8fbca.firebaseapp.com",
  projectId: "hostel-app-8fbca",
  storageBucket: "hostel-app-8fbca.appspot.com",
  messagingSenderId: "503535732420",
  appId: "1:503535732420:web:bc5789ec4502ba29d66b91",
  measurementId: "G-W71W2FM1SQ"
};
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));