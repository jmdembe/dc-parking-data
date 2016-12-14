var fs = require('fs');
var parse = require('csv-parse');

var theFileToRead = 'dc-parking-data-node/simple_data/parking_feb_2016.csv';

var parsedData = fs.readFile(theFileToRead, function processFile(err, data) {
  var stringifiedData = data.toString('utf-8');
  parse(stringifiedData, function parseData(x,y) {
    console.log(y);
    console.log((y.length)-1);

  });
});

// data = parse(data, [delimiter]);

// var violationList = parse()
