var request = require('request-promise');
var moment = require('moment');
var apiKey = '';

var fetchPhotos = function (roverName, date) {
    return request('https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName + '/photos?earth_date=' + date + '&api_key='+apiKey).then((resp) => {
        return JSON.parse(resp).photos.map((photo) => {
            return {
                id: photo.id,
                earthDate: moment(photo.earth_date, 'YYYY-MM-DD').toDate(),
                sol: photo.sol,
                cameraName: photo.camera.name,
                imgSrc: photo.img_src,
                roverName: photo.rover.name
            }
        })
    });
}

module.exports = {
    fetchPhotos
}
