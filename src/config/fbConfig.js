import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyC4E9BE3ksVNSAtidvujdwIn6LKCb3WVic",
  authDomain: "collaborator-react.firebaseapp.com",
  databaseURL: "https://collaborator-react.firebaseio.com",
  projectId: "collaborator-react",
  storageBucket: "collaborator-react.appspot.com",
  messagingSenderId: "207392506428",
  appId: "1:207392506428:web:567d5667741beb59b03939",
  measurementId: "G-2Q6V6M5RMF"

};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 