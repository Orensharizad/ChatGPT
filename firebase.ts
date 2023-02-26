import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhgGEhLV7TBgBHe3XqkrG2ZIHedprgSps",
    authDomain: "chatapp-47286.firebaseapp.com",
    projectId: "chatapp-47286",
    storageBucket: "chatapp-47286.appspot.com",
    messagingSenderId: "684229072720",
    appId: "1:684229072720:web:5af629cd7a05b6a7d3fe55"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }