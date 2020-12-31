
// from data.js
var tableData = data;

// Load all data into a table
generateTable(tableData);

// Set button functionality
// Select button and text input
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    tableData = data;

    // emptyFilter only needed for Filter Method #1
    //var emptyFilter = true;
    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select("#city").property("value");
    var stateFilter = d3.select("#state").property("value");
    var countryFilter = d3.select("#country").property("value");
    var shapeFilter = d3.select("#shape").property("value");

    // // Filter Method #1
    // if (dateFilter !==""){
    //     tableData = tableData
    //         .filter(tableData => tableData.datetime === dateFilter);
    //     emptyFilter = false;
    // };
    // if (cityFilter !==""){
    //     tableData = tableData
    //         .filter(tableData => tableData.city === cityFilter);
    //     emptyFilter = false;
    // };
    // if (stateFilter !==""){
    //     tableData = tableData
    //         .filter(tableData => tableData.state === stateFilter);
    //     emptyFilter = false;
    // };
    // if (countryFilter !==""){
    //     tableData = tableData
    //         .filter(tableData => tableData.country === countryFilter);
    //     emptyFilter = false;
    // };
    // if (shapeFilter !==""){
    //     tableData = tableData
    //         .filter(tableData => tableData.shape === shapeFilter);
    //     emptyFilter = false;
    // };
    // if (emptyFilter){
    //     tableData = data;
    // }

    // // Filter Method #2
    // var tableData2 = tableData.filter(i => {if (dateFilter != "") {return i.datetime === dateFilter;} else {return true;}})
    //                         .filter(i => {if (cityFilter != ""){ return i.city === cityFilter;} else {return true;}})
    //                         .filter(i => {if (stateFilter != ""){return i.state === stateFilter;} else {return true;}})
    //                         .filter(i => {if (countryFilter != ""){return i.country === countryFilter;} else {return true;}})
    //                         .filter(i => {if (shapeFilter != ""){return i.shape === shapeFilter;} else {return true;}});

    // Filter Method #2 Refined
    var tableData2 = tableData.filter(i => {if (dateFilter) {return i.datetime === dateFilter;} else {return true;}})
                            .filter(i => {if (cityFilter){return i.city === cityFilter;} else {return true;}})
                            .filter(i => {if (stateFilter){return i.state === stateFilter;} else {return true;}})
                            .filter(i => {if (countryFilter){return i.country === countryFilter;} else {return true;}})
                            .filter(i => {if (shapeFilter){return i.shape === shapeFilter;} else {return true;}});


    generateTable(tableData2);
    
});


// Generate Table Method #1
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

// // Generate Table Method #2
// function generateTable(tableData){
//     var tableBody = d3.select("tbody");
//     tableBody.html("");
//     tableData.forEach(function(vals) {
//         var row = tableBody.append("tr");
//         Object.entries(vals).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// }

