var fs = require('fs');
var parse = require('csv-parse');

var analyze = require('./analysis');
var parse = require('./parse-read');

parse.parseFile(function callBack(tickets) {
    analyze.dataAnalysis(violations);
});
