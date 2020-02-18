var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "resident-ccny.firebaseapp.com",
  databaseURL: "https://resident-ccny.firebaseio.com",
  projectId: "resident-ccny",
  storageBucket: "resident-ccny.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

export default firebaseConfig;