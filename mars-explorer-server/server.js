var express = require('express')

var cors = require('cors');
var app = express();
var jobs = require('./modules/jobs')

app.use(cors());
app.use('/photos', require('./modules/photos-routes'));
jobs.start();
    

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})