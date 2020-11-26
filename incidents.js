//url for carto database -OpenDataPhilly
//Only grabbing incidents 
const url = "https://heathhan.carto.com/api/v2/sql?q=SELECT location_block, text_general_code, dispatch_date_time FROM incidents_part1_part2 ORDER BY dispatch_date_time";

//Grab element from HTML
//For table get all three different columns
//const apifeed = document.getElementById("incidents");
const table_1 = document.getElementById("incident");
const table_2 = document.getElementById("location");
const table_3 = document.getElementById("date_time");

//post method implementation - connect to API
async function postData(temp = '') {
    const res = await fetch(temp, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        //credentials: 'same-origin',
        headers: {
            //'Set-Cookie': 'IP_JAR; SameSite=None',
            'Set-Cookie': '_gid=GA1.2.261869541.1606241577; SameSite=None; Secure',
            'Set-Cookie': '_ga=GA1.2.1250983371.1605905149; SameSite=None; Secure' 
        },
        //body: JSON.stringify(data)

    });
    return res.json();
}


postData(url) 
    //fetch(url)
    //.then(res => res.json())
    .then(data => {initialize(data);
    //.then((data) => console.log(data))
    //.catch((err) => console.log("Error:", err));

});

//Function to initialize our data and place it in the API Feed div
function initialize(incidents) {
    //for loop to set the datafrom API
    for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
        //const newItem = document.createElement("li")

        //create new elements for each column of the table
        const newItem_1= document.createElement("tr");
        const newItem_2 = document.createElement("tr"); 
        const newItem_3 = document.createElement("tr"); 

        //grab data from API into variables
        var element = incidents.rows[i];
        var location = element.location_block;
        var date_time = element.dispatch_date_time;
        var event = element.text_general_code;
        
        //Output and append the crime event to the table
        newItem_1.textContent = `${event}`;
        table_1.appendChild(newItem_1);

        //Output and append the location of the crime to the table
        newItem_2.textContent = `${location}`;
        table_2.appendChild(newItem_2);

        //Output and append the date & time to the table
        newItem_3.textContent = `${date_time}`;
        table_3.appendChild(newItem_3); 


        //code for loading without table
        //console.log(location, date_time, event); 
        //output data
        //newItem.textContent = `${event}` + " - " + `${location}` + " - " + `${date_time}`;
        //Append the dom 
        //apifeed.appendChild(newItem);
    };
};