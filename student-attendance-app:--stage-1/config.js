import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzkWMRplr-lr3TW9fzkELHePoudq1QW2g",
  authDomain: "student-attendence-app.firebaseapp.com",
  databaseURL: "https://student-attendence-app.firebaseio.com",
  projectId: "student-attendence-app",
  storageBucket: "student-attendence-app.appspot.com",
  messagingSenderId: "190834667031",
  appId: "1:190834667031:web:3359762d589ec614cc7652",
  measurementId: "G-HZNZ0WJXHT"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
