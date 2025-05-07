// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";
// import { initializeApp } from "firebase/app.js";
// import { getAnalytics } from "firebase/analytics.js";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth.js";
// import { getStorage, ref, uploadBytes } from "firebase/storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHerAiqFZXTOhihHdjcYntz96K6dy2gA",
  authDomain: "strdb-9bade.firebaseapp.com",
  projectId: "strdb-9bade",
  storageBucket: "strdb-9bade.firebasestorage.app",
  messagingSenderId: "556654553673",
  appId: "1:556654553673:web:24740f6e3af3a75d862d98",
  measurementId: "G-80T6CPTZLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
const auth = getAuth(app);



async function Go() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("validated");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

    const storageRef = ref(storage, 'uploads/' + document.getElementById("file").value);
    uploadBytes(storageRef, file).then((snapshot) => {
      alert("ok");
    });
  }

const GoButton = document.getElementById("form1Button");
GoButton.addEventListener("click", Go);




