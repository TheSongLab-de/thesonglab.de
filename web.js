var express = require("express");
var app = express();
var fs = require('fs');
var mimeLookup = require('mime');

app.use(express.logger());

app.get('/', function(request, response) {

            var rootPath = '.',
                filePath = rootPath+request.url;

            fs.exists(filePath, function(exists) {

            if (exists) {
                fs.readFile(filePath, function(error, content) {
                    if (error) {
                        response.send(500);
                    }
                    else {
                        var contentType = mimeLookup.lookup(filePath);
                        response.set('Content-Type',contentType)
                        response.send(200,content);
                    }
                });
            }
            else {
                response.send(200, filePath);
            }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
