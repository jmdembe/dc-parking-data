var fs = require('fs');
var parse = require('csv-parse');
var theFileToRead = 'dc-parking-data-node/simple_data/parking_feb_2016.csv';
var violationType = {};


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
      console.log("Level 1 Answer 1: ", (data.length)-1);

      var result = data.map(function violations(citation){
        return citation[9];

      });
      result.shift();
      result.forEach(function count(citationType) {
        if(violationType[citationType] === undefined) {
            violationType[citationType] = 1;
        } else {
          violationType[citationType]++;
        }
      });
      console.log("Level 1 Answer 2: ", violationType);
      var sortedViolation = Object.keys(violationType).sort(function (a, b) {
        if (violationType[a] < violationType[b]) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log( sortedViolation[0], violationType[sortedViolation[0]] );
    }
  });


});
