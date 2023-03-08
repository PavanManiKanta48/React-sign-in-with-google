import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useState, useEffect } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyCglsXLGWZBiiQq03VbeyiAFWZ3sOBbBP0",
  authDomain: "sign-in-project-cfad4.firebaseapp.com",
  projectId: "sign-in-project-cfad4",
  storageBucket: "sign-in-project-cfad4.appspot.com",
  messagingSenderId: "953304324020",
  appId: "1:953304324020:web:0604cffdc0c5607428c4e1",
});
const auth = firebase.auth();

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
  });
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <center>
        {user ? (
          <div>
            <h1>Welcome to home page </h1>
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        )}
      </center>
    </div>
  );
};

export default App;
