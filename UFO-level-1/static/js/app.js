
// from data.js
var tableData = data;

// Load all data into a table
generateTable(tableData);

// Set button functionality
// Select button and text input
// Apply logic such that:
//    1) user is notified if input is blank
//    2) a blank input resets the table to the original data
//    3) inputted dates filters the table
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    var filterDate = d3.select("#datetime");
    var filterValue = filterDate.property("value");

    if (filterValue === ""){
        window.alert("Please enter a date between 1/1/2010 and 1/13/2010");
        generateTable(tableData);
    }
    else{
        var filteredTableData = tableData
            .filter(tableData => tableData.datetime === filterValue
        );
        generateTable(filteredTableData);
    }
    
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
