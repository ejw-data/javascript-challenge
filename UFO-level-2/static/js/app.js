
// from data.js
var tableData = data;

// Load all data into a table
generateTable(tableData);

// Set button functionality
// Select button and text input
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    tableData = data;
    var emptyFilter = true;
    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select("#city").property("value");
    var stateFilter = d3.select("#state").property("value");
    var countryFilter = d3.select("#country").property("value");
    var shapeFilter = d3.select("#shape").property("value");

    if (dateFilter !==""){
        tableData = tableData
            .filter(tableData => tableData.datetime === dateFilter);
        emptyFilter = false;
    };
    if (cityFilter !==""){
        tableData = tableData
            .filter(tableData => tableData.city === cityFilter);
        emptyFilter = false;
    };
    if (stateFilter !==""){
        tableData = tableData
            .filter(tableData => tableData.state === stateFilter);
        emptyFilter = false;
    };
    if (countryFilter !==""){
        tableData = tableData
            .filter(tableData => tableData.country === countryFilter);
        emptyFilter = false;
    };
    if (shapeFilter !==""){
        tableData = tableData
            .filter(tableData => tableData.shape === shapeFilter);
        emptyFilter = false;
    };
    if (emptyFilter){
        tableData = data;
    }
    generateTable(tableData);
    
});

// Generate table based on data passed as tableData
function generateTable(tableData){
    //Separate data into table format
    var tableContent=[];
    for (i=0; i< tableData.length; i++) {
        tableContent += `<tr><td> ${tableData[i].datetime}</td><td>${tableData[i].city}</td><td>${tableData[i].state}</td><td>${tableData[i].country}</td><td>${tableData[i].shape}</td><td>${tableData[i].durationMinutes}</td><td>${tableData[i].comments}</td></tr>`;
    };
    //Select table div and insert table html
    var tableBody = d3.select("tbody");
    tableBody.html("");
    tableBody.html(tableContent);
};
