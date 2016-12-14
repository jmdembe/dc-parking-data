var fs = require('fs');
var parse = require('csv-parse');
var theFileToRead = 'dc-parking-data-node/simple_data/parking_feb_2016.csv';


fs.readFile(theFileToRead, function processFile(err, data){
  if(err) {
    console.error(err);
    return;
  }

  var stringifiedData = data.toString('utf-8');

  parse(stringifiedData, function parseData(err, data) {
    if(err) {
      console.error(err);
      return;
    }
    else {
      data.forEach(function violations(citation){
        var violationCount = citation[9];
        console.log(violationCount);
      });
    }
  });
  // violationCount.shift();
  // console.log(typeof(violationCount));
});




// data = parse(data, [delimiter]);

// var violationList = parse()
