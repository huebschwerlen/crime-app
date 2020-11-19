// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyB9NH7NAXsAgQWmE8KUZhFQ-8ahWx8wXo4",
  authDomain: "crimeapp-68fa6.firebaseapp.com",
  databaseURL: "https://crimeapp-68fa6.firebaseio.com",
  projectId: "crimeapp-68fa6",
  storageBucket: "crimeapp-68fa6.appspot.com",
  messagingSenderId: "960260456063",
  appId: "1:960260456063:web:78857ae16003149f99494a",
  measurementId: "G-85JEK36F1Z",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
