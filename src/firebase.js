
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBtiiZomlq6rqwI4klGEoTaWsO8X1mK1Ms",
    authDomain: "hh3d-a3e75.firebaseapp.com",
    databaseURL: "https://hh3d-a3e75-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hh3d-a3e75",
    storageBucket: "hh3d-a3e75.appspot.com",
    messagingSenderId: "237205383967",
    appId: "1:237205383967:web:48693f984828ce7a4f5e2a",
    measurementId: "G-6YEWY5KPNN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);