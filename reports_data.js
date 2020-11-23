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
 let reportsRef = firebase.database().ref('reports');

 reportsRef.on('value', readReports, errorReports);

 function readReports(data) {
     let reports = data.val();
     let keys = Object.keys(reports);

     for(let i = 0; i < keys; ++i) {
        let j = keys[i];
        let name = reports[k].name;
        let location = reports[k].location;
        let message = reports[k].message;
        console.log(name, location, message);
     }

     console.log(data.val());
    
 }

 function errorReports(error) {
     console.log('Error!');
     console.log(error);
 }