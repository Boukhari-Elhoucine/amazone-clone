import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBJXdzbgW1LM2_guO4KCMV0D3mK-taNraI",
  authDomain: "amazn-f65f1.firebaseapp.com",
  projectId: "amazn-f65f1",
  storageBucket: "amazn-f65f1.appspot.com",
  messagingSenderId: "585413199716",
  appId: "1:585413199716:web:5b71d8ba474fc7bd3bdc71",
};
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;
