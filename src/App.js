import logo from './logo.svg';
import './App.css';
import { authentication } from "./firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  signInWithPopup,
  signInWithRedirect,
  FacebookAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const signinWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
      signInWithPopup(authentication, provider)
        .then((result) => {
          // console.log("On desktop site");
          // var accessToken = result.credential.accessToken;
          // var user = result.user;
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(user);
          console.log(accessToken);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  return (
    <div className="App">
      <button onClick={signinWithFacebook}>faceb</button>
    </div>
  );
}

export default App;
