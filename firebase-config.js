// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDGwG4v27qANFhgykalRQE10tVfQTnWTL4",
    authDomain: "yadav-42b47.firebaseapp.com",
    databaseURL: "https://yadav-42b47-default-rtdb.firebaseio.com",
    projectId: "yadav-42b47",
    storageBucket: "yadav-42b47.firebasestorage.app",
    messagingSenderId: "668483505851",
    appId: "1:668483505851:web:7c0aaa80f47bbf68b1239e",
    measurementId: "G-VRZ5E704NH"
};

// Firebase App Initialize
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Phone OTP Login
function sendOTP(phone) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible'
    });
    auth.signInWithPhoneNumber(phone, window.recaptchaVerifier)
        .then(confirmation => {
            window.confirmationResult = confirmation;
            alert('OTP भेज दिया गया है!');
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
}

function verifyOTP(code) {
    window.confirmationResult.confirm(code)
        .then(result => {
            alert('Login Successful!');
            document.getElementById('user-info').innerHTML = 
                `<p>Welcome ${result.user.phoneNumber}</p>`;
        })
        .catch(error => {
            alert('Invalid OTP');
        });
                                                                   }
