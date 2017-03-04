var cron = require('node-cron');
var moment = require('moment');
var photosRepository = require('./photos-repository');
var nasaGateway = require('./nasa-gateway');
var rovers = ['opportunity', 'curiosity'];

var start = function () {
    cron.schedule('0 0 1 * *', function () {
        console.log('fetching photos...')
        let today = moment().subtract(1, 'days').format('YYYY-M-D');
        rovers.forEach((roverName) => fetchPhotos(roverName, today))
    })
}
function fetchPhotos(roverName, today) {
    nasaGateway.fetchPhotos(roverName, today)
        .then(function (photos) {
            photosRepository.insert(photos);
        })
};


module.exports = {
    start
}