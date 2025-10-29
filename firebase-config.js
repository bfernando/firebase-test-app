// Firebase configuration file
// Using project config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyClB89Gpi9Q4xI82G9OMPPTbLip-ZtGXfI",
  authDomain: "auth-test-html-js.firebaseapp.com",
  projectId: "auth-test-html-js",
  storageBucket: "auth-test-html-js.firebasestorage.app",
  messagingSenderId: "857550809157",
  appId: "1:857550809157:web:00109dca71dc905e42db2c",
  measurementId: "G-V057TGS001"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
