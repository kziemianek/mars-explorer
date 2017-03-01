var request = require('request-promise');
var apiKey = '';

var fetchPhotos = function (roverName, date) {
    return request('https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName + '/photos?earth_date=' + date + '&api_key='+apiKey);
}

module.exports = {
    fetchPhotos
}
