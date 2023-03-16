// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   
        apiKey: "AIzaSyDhF85OlDOg6OukFeq-ERS0Skai0aKmwlw",
        authDomain: "invoice-792e1.firebaseapp.com",
        projectId: "invoice-792e1",
        storageBucket: "invoice-792e1.appspot.com",
        messagingSenderId: "754778959673",
        appId: "1:754778959673:web:52d546a0f8bb4b6622c2e8"


   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey:process.env.NEXT_PUBLIC_apiKey, 
// authDomain:process.env.NEXT_PUBLIC_authDomain, 
// projectId:process.env.NEXT_PUBLIC_projectId, 
// storageBucket:process.env.NEXT_PUBLIC_storageBucket, 
// messagingSenderId:process.env.NEXT_PUBLIC_messagingSenderId, 
// appId:process.env.NEXT_PUBLIC_appId, 