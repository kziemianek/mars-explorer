var photosRepo = require('./modules/photos-repository');
var moment = require('moment');
var nasaGateway = require('./modules/nasa-gateway');

let roverName = 'curiosity';

photosRepo.deleteAll().then(() => {
    let initDate = moment().subtract(5, 'days');
    nasaGateway.fetchPhotos(roverName,  initDate.format('YYYY-M-D')).then((photos) => {
        photosRepo.insert(photos);
    })
})