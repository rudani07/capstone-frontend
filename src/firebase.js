// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYhIYllivVtXAxdCwvbLbSdX0NEdI5CE",
  authDomain: "ecommerce-c21ce.firebaseapp.com",
  projectId: "ecommerce-c21ce",
  storageBucket: "ecommerce-c21ce.appspot.com",
  messagingSenderId: "610618113937",
  appId: "1:610618113937:web:bd7ad132ffcc8b0235e430",
  measurementId: "G-Z0CDF5G7GY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const googleAuthProvider = new firebase.auth.googleAuthProvider();
