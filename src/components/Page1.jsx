// import firebase from "firebase";
// import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";
// import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
// Initialize the FirebaseUI Widget using Firebase.

// var firebaseui = require('firebaseui');
// import firebaseui from 'firebaseui';
// import ciap from 'gcip-iap';
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

  // Other config options...
function Page1() {
  const uiConfig = {
    
    signInFlow: "popup",
    signInSuccessUrl: "/Hostel_Allocation_Assignment/",
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
     
    
  };

  return (
    
    <section className="sign-in">
      <h1>Hostel Allocation</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </section>
  );
}

export default Page1;