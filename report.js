//connect to firebase
const config = {
    apiKey: "AIzaSyB9NH7NAXsAgQWmE8KUZhFQ-8ahWx8wXo4",
    authDomain: "crimeapp-68fa6.firebaseapp.com",
    databaseURL: "https://crimeapp-68fa6.firebaseio.com",
    projectId: "crimeapp-68fa6",
    storageBucket: "crimeapp-68fa6.appspot.com",
    messagingSenderId: "960260456063",
    appId: "1:960260456063:web:78857ae16003149f99494a"
  };

 firebase.initializeApp(config);
 var reportsRef = firebase.database().ref('reports');


 //Add listener for form submit
document.getElementById('actform').addEventListener('submit', submitReport);

function submitReport(event) {
    event.preventDefault();

    //get input
    var name = getInput('nameInput');
    var location = getInput('locationInput');
    var message = getInput('messageInput');

    console.log(name);

    saveReports(name, location, message);
}

//Get the report input
function getInput(id){
    return document.getElementById(id).value;
}

//function to save the reports to firebase
function saveReports(name, location, message){
    var newReportsRef = reportsRef.push();
    newReportsRef.set({
        name: name,
        location: location,
        message: message
    })
}