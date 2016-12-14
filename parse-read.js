var fs = require('fs');
var parse = require('csv-parse');
var theFileToRead = 'dc-parking-data-node/simple_data/parking_feb_2016.csv';
var count = {};


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
        if(count[citationType] === undefined) {
            count[citationType] = 1;
        } else {
          count[citationType]++;
        }
        console.log(count);
      });
    }
  });

});
