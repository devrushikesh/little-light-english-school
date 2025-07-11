// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh4YI-Gi9iPRINW0VCIJkjFTbNQCiNclE",
  authDomain: "little-little-english-school.firebaseapp.com",
  projectId: "little-little-english-school",
  storageBucket: "little-little-english-school.firebasestorage.app",
  messagingSenderId: "102146248391",
  appId: "1:102146248391:web:0f148432efdcd45e58b8e2",
  measurementId: "G-MG66N2FDVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in other parts of the app
export { db, storage, analytics };
export default app;
