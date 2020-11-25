//url for carto database -OpenDataPhilly
//Only grabbing incidents 
const url = "https://heathhan.carto.com/api/v2/sql?q=SELECT location_block, text_general_code, dispatch_date_time FROM incidents_part1_part2 ORDER BY dispatch_date_time";

//Grab element from HTML
const apifeed = document.getElementById("incidents");

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

//Function to initialize our 
function initialize(incidents) {
    for(let i = 0; i < 50; ++i) {
        const newItem = document.createElement("li")
        var element = incidents.rows[i];
        var location = element.location_block;
        var date_time = element.dispatch_date_time;
        var event = element.text_general_code;
        
        console.log(location, date_time, event);
    
        newItem.textContent = `${location}` + " - " + `${date_time}` + " - " + `${event}`;
        apifeed.appendChild(newItem);
    };
};