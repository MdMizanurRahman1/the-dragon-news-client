// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP1hwKZKApsDrPjKE9nX5Kw5O_sRiTKUo",
    authDomain: "the-news-dragon-client-3d038.firebaseapp.com",
    projectId: "the-news-dragon-client-3d038",
    storageBucket: "the-news-dragon-client-3d038.appspot.com",
    messagingSenderId: "464731877495",
    appId: "1:464731877495:web:7d72dbc13fa82ef6569672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;