var express = require('express');
var path = require('path');
var dist = path.join(__dirname, '/dist');

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(dist))


app.get('/*', function (req, res) {
    res.sendFile(path.join(dist, 'index.html'))
});

console.log('Listening on ' + port);
app.listen(port);