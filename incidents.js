const url = "https://heathhan.carto.com/api/v2/sql?q=SELECT * FROM incidents_part1_part2";
fetch(url)
.then(res => res.json())
.then((data) => console.log(data));