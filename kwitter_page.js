//YOUR FIREBASE LINK
var firebaseConfig = {
  apiKey: "AIzaSyACY4IGcfheCKleZhf9gvZGLMMo3CKR__A",
  authDomain: "kwitter-22906.firebaseapp.com",
  databaseURL: "https://kwitter-22906-default-rtdb.firebaseio.com",
  projectId: "kwitter-22906",
  storageBucket: "kwitter-22906.appspot.com",
  messagingSenderId: "282477142609",
  appId: "1:282477142609:web:e94ab28f46c397bf46ce70"
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


      } });  }); }
getData();
