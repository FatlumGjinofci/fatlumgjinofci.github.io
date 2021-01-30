import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyAHxlKO-g1jGVe-YuKM-0ptezIzJp0yrYE",
    authDomain: "ld-vue.firebaseapp.com",
    databaseURL: "https://ld-vue.firebaseio.com",
    projectId: "ld-vue",
    storageBucket: "ld-vue.appspot.com",
    messagingSenderId: "424200377039",
    appId: "1:424200377039:web:378e1e73b55faf56be5dba",
    measurementId: "G-XDCZL43EHE"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);