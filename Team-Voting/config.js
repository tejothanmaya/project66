import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCwtjxmZUYyBihzTB9jC_rrdhOi5N0CA4c",
        authDomain: "project66-a2894.firebaseapp.com",
        projectId: "project66-a2894",
        storageBucket: "project66-a2894.appspot.com",
        messagingSenderId: "1021191258351",
        appId: "1:1021191258351:web:b3ec5cd9ea59703aad5b1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();