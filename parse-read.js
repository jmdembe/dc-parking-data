var fs = require('fs');
var parse = require('csv-parse');


var theFileToRead = null;

var data = fs.readFile('dc-parking-data-node/simple_data/parking_feb_2016.csv', function processFile(err, parsed) {
    parsed.toString(parsed);
    console.log(parsed);


});

// var violationList = parse()
