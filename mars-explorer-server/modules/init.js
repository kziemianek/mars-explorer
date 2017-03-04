var nasaGateway = require('./nasa-gateway');
var moment = require('moment');
var photosRepo = require('./photos-repository');

let roverName = 'curiosity';


// fetches new photos
function init() {
    console.log('finding max photos date');
    photosRepo.findLastPhotosDate(roverName).then((date) => {
        let lastDate = date || moment().subtract(5, 'days')
        let actualDate = moment().subtract(1, 'days');
        while (lastDate.add(1, 'day').diff(actualDate, 'days') < 0) {
            console.log(`fetching photos for date ${lastDate}`);
            nasaGateway.fetchPhotos(roverName, lastDate.format('YYYY-M-D')).then((photos) => {
                photosRepo.insert(photos);
            })
        };
    })
}

module.exports = {
    init
}