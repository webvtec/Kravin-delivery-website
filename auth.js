const firebaseConfig = {
  apiKey: "AIzaSyD5ZcQCWIMFo8u9SI-Svg5DoJESpcGz2jQ",
  authDomain: "kravin-delivery-login.firebaseapp.com",
  projectId: "kravin-delivery-login",
  storageBucket: "kravin-delivery-login.firebasestorage.app",
  messagingSenderId: "1035748923136",
  appId: "1:1035748923136:web:bf68e1434d7bae3a7385e5"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "https://your-carrd-site.carrd.co/"; // Replace with real Carrd URL
    })
    .catch(error => alert(error.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "https://your-carrd-site.carrd.co/";
    })
    .catch(error => alert(error.message));
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      window.location.href = "https://your-carrd-site.carrd.co/";
    })
    .catch(error => alert(error.message));
}
