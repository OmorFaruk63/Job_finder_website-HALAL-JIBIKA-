import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDclsEZ2BAdA5qukl5fjFUzOYSolvz1pAc",
    authDomain: "halal-jibika-dd963.firebaseapp.com",
    projectId: "halal-jibika-dd963",
    storageBucket: "halal-jibika-dd963.appspot.com",
    messagingSenderId: "624943952527",
    appId: "1:624943952527:web:a37d8856344864a2f136fa"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);