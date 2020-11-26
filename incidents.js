//url for carto database -OpenDataPhilly
//Only grabbing incidents 
const url = "https://heathhan.carto.com/api/v2/sql?q=SELECT location_block, text_general_code, dispatch_date_time, ucr_general FROM incidents_part1_part2 ORDER BY dispatch_date_time";

//Grab element from HTML
//For table get all three different columns
//const apifeed = document.getElementById("incidents");
const table_1 = document.getElementById("incident");
const table_2 = document.getElementById("location");
const table_3 = document.getElementById("date_time");

//Array to hold on to our data
const array = [];

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
        array[i] = element;
        var location = element.location_block;
        var date_time = element.dispatch_date_time;
        var event = element.text_general_code;
        var ucr = element.ucr_general;

        //console.log(ucr);
        
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


//Function for when user selects a type of crime
function sort() {
    var x = document.getElementById("sort").value;

    //Get the rows count
    var row = getCount();
    //console.log(row);


    //create new elements for each column of the table
    const newItem_1= document.createElement("tr");
    const newItem_2 = document.createElement("tr"); 
    const newItem_3 = document.createElement("tr"); 
    
    console.log(x);
    //Homicides
    if(x == "100") {

       for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "100") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       }

    }

    //Rape
    else if(x == "200") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "200") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Robbery
    else if(x == "300") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "300") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Agg assault
    else if(x == "400") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "400") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Burglary
    else if(x == "500") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "500") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Theft
    else if(x == "600") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "600") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Motor vehicle theft
    else if(x == "700") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "700") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Other assaults
    else if(x == "800") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "800") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Arson
    else if(x == "900") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "900") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Forgery/counterfeiting
    else if(x == "1000") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1000") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Fraud
    else if(x == "1100") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1100") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Embezzlement
    else if(x == "1200") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1200") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Receiving stolen property
    else if(x == "1300") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1300") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Vandalism/criminal mischief
    else if(x == "1400") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1400") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Weapon violations
    else if(x == "1500") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1500") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Prostitution - commercial
    else if(x == "1600") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1600") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Other sex offenses
    else if(x == "1700") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1700") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Narcotic/drug law violations
    else if(x == "1800") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1800") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Gambling violations
    else if(x == "1900") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "1900") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Offenses against family/children
    else if(x == "2000") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2000") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //DUI
    else if(x == "2100") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2100") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Liquor law violations
    else if(x == "2200") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2200") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Public drunkenness
    else if(x == "2300") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2300") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Disorderly conduct
    else if(x == "2400") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2400") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //Vagrancy/loitering
    else if(x == "2500") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2500") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

    //All other offenses
    else if(x == "2600") {
        for(let i = 0; i < 50/*incidents.rows.length*/; ++i) {
            console.log(array[i].ucr_general);
            if(array[i].ucr_general == "2600") {
                //Output and append the crime event to the table
                newItem_1.textContent = `${array[i].text_general_code}`;
                table_1.appendChild(newItem_1);

                //Output and append the location of the crime to the table
                newItem_2.textContent = `${array[i].location_block}`;
                table_2.appendChild(newItem_2);

                //Output and append the date & time to the table
                newItem_3.textContent = `${array[i].dispatch_date_time}`;
                table_3.appendChild(newItem_3);  
            }
       } 
    }

}

//function to get rows count
function getCount() {
    var totalRowCount = 0;
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
        totalRowCount++;
    }
    
    return totalRowCount/3-1;
}
