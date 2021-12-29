import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCTZNn6TKC0oxyaeo2cjN9eLh7c0eRWlOU",
    authDomain: "loginreact-19fe2.firebaseapp.com",
    projectId: "loginreact-19fe2",
    storageBucket: "loginreact-19fe2.appspot.com",
    messagingSenderId: "1016184827018",
    appId: "1:1016184827018:web:598c173b759acf49995173"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth=firebase.auth();
var db=firebase.firestore();

export {firebase,db,auth};