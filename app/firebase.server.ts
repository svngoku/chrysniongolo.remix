// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApN9U5K4VKIcH4xDbPdsl9_KwXgZQWLRk",
  authDomain: "chrysniongolo-940ef.firebaseapp.com",
  projectId: "chrysniongolo-940ef",
  storageBucket: "chrysniongolo-940ef.appspot.com",
  messagingSenderId: "935022924957",
  appId: "1:935022924957:web:90bd3ad026f2cb36a87074",
  measurementId: "G-DQVVXKM5Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {
  app, analytics,
}
