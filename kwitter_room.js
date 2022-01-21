const firebaseConfig = {
      apiKey: "AIzaSyBoxHgay0b4Wa8M9swLXZ6NX-lt3XKrwXI",
      authDomain: "kwitter-project-82283.firebaseapp.com",
      databaseURL: "https://kwitter-project-82283-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-82283",
      storageBucket: "kwitter-project-82283.appspot.com",
      messagingSenderId: "284146243984",
      appId: "1:284146243984:web:11b096d40233f7dd557b15"
    };
    
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      //End code
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
