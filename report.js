//connect to firebase and initialize 
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

 //Add listener for submitting form
document.getElementById('actform').addEventListener('submit', submitReport);

//Function to submit and save reports
function submitReport(event) {
    event.preventDefault();

    var name = getInput('nameInput');
    var location = getInput('locationInput');
    var message = getInput('messageInput');

    saveReports(name, location, message);
}

//Function to get report inputs
function getInput(id){
    return document.getElementById(id).value;
}

//Function to save the reports to firebase
function saveReports(name, location, message){
    var newReportsRef = reportsRef.push();
    newReportsRef.set({
        name: name,
        location: location,
        message: message
    })
}