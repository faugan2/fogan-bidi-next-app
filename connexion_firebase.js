import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfZFAhMTtauxr2SpxAVFXG9DnNdr3BD-w",
    authDomain: "fogan-bidi.firebaseapp.com",
    projectId: "fogan-bidi",
    storageBucket: "fogan-bidi.appspot.com",
    messagingSenderId: "200382988447",
    appId: "1:200382988447:web:97027c3ff33846f75e62aa"
  };

 
let app;
if(firebase.apps.length==0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}


  const db=app.firestore();

  export {db};