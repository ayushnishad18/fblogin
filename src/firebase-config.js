// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//gs://bizup-dev.appspot.com/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCG3dFF2caxazANtMG854VqM99sGPgMAfc",
  authDomain: "fb-login-e4242.firebaseapp.com",
  projectId: "fb-login-e4242",
  storageBucket: "fb-login-e4242.appspot.com",
  messagingSenderId: "25298657476",
  appId: "1:25298657476:web:a5aa307f91bb6257f8e991",
  measurementId: "G-KJQDDEL8K7"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB2JxnOuVTQH9CsFnnWyTJpSIjpSqxGU6w",
//   authDomain: "fbauth-7b910.firebaseapp.com",
//   projectId: "fbauth-7b910",
//   storageBucket: "fbauth-7b910.appspot.com",
//   messagingSenderId: "362840745956",
//   appId: "1:362840745956:web:5013c8d02792fe6eae09f1",
//   measurementId: "G-ZKTSD04DWM"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);