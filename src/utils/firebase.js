// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkfo2E5BWoU0u1LZ7jEbBN7vEudajc3DI",
  authDomain: "shop-c1a4f.firebaseapp.com",
  databaseURL: "https://shop-c1a4f-default-rtdb.firebaseio.com",
  projectId: "shop-c1a4f",
  storageBucket: "shop-c1a4f.appspot.com",
  messagingSenderId: "78754536530",
  appId: "1:78754536530:web:abdea544e046f35182138b",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
