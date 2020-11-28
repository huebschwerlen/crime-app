//connect to firebase
const config = {
  apiKey: "AIzaSyB9NH7NAXsAgQWmE8KUZhFQ-8ahWx8wXo4",
  authDomain: "crimeapp-68fa6.firebaseapp.com",
  databaseURL: "https://crimeapp-68fa6.firebaseio.com",
  projectId: "crimeapp-68fa6",
  storageBucket: "crimeapp-68fa6.appspot.com",
  messagingSenderId: "960260456063",
  appId: "1:960260456063:web:78857ae16003149f99494a",
};

//initialize firebase config
firebase.initializeApp(config);

//get element from html
const results = document.getElementById("repres");

let reportsRef = firebase.database().ref("reports");
reportsRef.on("value", readReports, errorReports);

//function to read reports from firebase database
function readReports(data) {
  //getting the data values from firebase
  var reports = data.val();
  var keys = Object.keys(reports);

  //iterate through keys to get all the reports
  for (var i = 0; i < keys.length; ++i) {
    const newItem = document.createElement("P");

    var j = keys[i];
    var name = reports[j].name;
    var location = reports[j].location;
    var message = reports[j].message;

    //output the data
    newItem.innerText =
      `${message}` + " - " + `${location}` + " - " + `${name}` + "\n";

    //append node
    results.appendChild(newItem);
  }
}

//Error if something goes wrong
function errorReports(error) {
  console.log("Error!");
  console.log(error);
}
