var express = require('express');
var path = require('path');
var cors = require('cors');
var dist = path.join(__dirname, '/mars-explorer-client/dist');
var jobs = require('./mars-explorer-server/modules/jobs')


var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(dist))


app.use('/photos', require('./mars-explorer-server/modules/photos-routes'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(dist, 'index.html'))
});


jobs.start();

console.log('Listening on ' + port);
app.listen(port);