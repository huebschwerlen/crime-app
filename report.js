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

//initialize firebase
 firebase.initializeApp(config);
 var reportsRef = firebase.database().ref('reports');

//Add listener for submitting form
document.getElementById('actform').addEventListener('submit', submitReport);

//Function to submit and save reports
function submitReport(event) {
    event.preventDefault();

    //get values from form
    var name = getInput('nameInput');
    var location = getInput('locationInput');
    var message = getInput('messageInput');

    //check if required fields are filled out
    if(name == "" || location == "" || message ==""){
        alert("Please fill out required fields");
    }
    //check if they conatin special characters - to prevent scripts being added
    else if(name.includes("<") || name.includes("$") || location.includes(">") || location.includes("$") || message.includes("$") || message.includes(">")) {
        alert ("Fields cannot conatain special characters ex:(<, >, $)")
    }
    //submit report to firebase database and let user know 
    else {
        //save to firebase database
        saveReports(name, location, message);

        //Let user know their report was submitted
        alert("Incident reported!"); 
    }


}

//Function to get report inputs
function getInput(id){
    return document.getElementById(id).value;
}

//Function to save the reports to firebase
function saveReports(name, location, message){
    //push form data to firebase
    var newReportsRef = reportsRef.push();
    newReportsRef.set({
        name: name,
        location: location,
        message: message
    })
}

//refresh page on submit to clear form
function onSubmit() {
    location.reload();

}

