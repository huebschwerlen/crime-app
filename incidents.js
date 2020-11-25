const url = "https://heathhan.carto.com/api/v2/sql?q=SELECT location_block, text_general_code, dispatch_date_time FROM incidents_part1_part2 ORDER BY dispatch_date_time";

const apifeed = document.getElementById("apifeed");

fetch(url)
.then(res => res.json())
.then((data) => initialize(data))
//.then((data) => console.log(data))
.catch((err) => console.log("Error:", err));

function initialize(incidents) {
    for(let i = 0; i < 50; ++i) {
        var newItem = document.createElement("ol")
        var element = incidents.rows[i];
        var location = element.location_block;
        var date_time = element.dispatch_date_time;
        var event = element.text_general_code;
        
        console.log(location, date_time, event);
    
        newItem.innertext = `${location}`;
        apifeed.appendChild(newItem);
    };
};