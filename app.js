  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBm8m3X6EYcXD7r0uSVUHCUa1KQEoaGx7g",
    authDomain: "web-start-6d7a9.firebaseapp.com",
    databaseURL: "https://web-start-6d7a9.firebaseio.com",
    projectId: "web-start-6d7a9",
    storageBucket: "web-start-6d7a9.appspot.com",
    messagingSenderId: "269529229616"
  };
  firebase.initializeApp(config);

    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
