import React,{ useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './App.css';
// import firebase from "firebase";
// import {db} from './firebase'
// import { collection, getDocs } from 'firebase/firestore';
import Nav from "./components/Nav";
import Booking from "./components/Booking";
import Page1 from "./components/Page1";
// import firebaseui from 'firebaseui';
// import firebaseui from 'firebaseui';
function App() {
  // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [dp, setDP] = useState("");

   useEffect(() => {

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setName(user.displayName);
        setDP(user.photoURL);
      }
      setIsSignedIn(!!user);
    });
 return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
 }, []);

return (
  <div className="App">
    {/* <h2>kritigyaaaaa</h2> */}
    {/* <Page1/>
    <Nav/>
    <Booking/> */}
    {/* <Page1/> */}
    <Nav dp={dp} isSignedIn={isSignedIn} />
    {isSignedIn ? <Booking name={name} /> : <Page1 />}
  </div>
);
}

export default App;