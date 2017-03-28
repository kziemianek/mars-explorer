var MongoClient = require('mongodb').MongoClient;
var Promise = require('promise');
var moment = require('moment');
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mars_explorer';

insert = function (photos) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(photos, function (err, result) {
                resolve(photos);
                db.close();
            });
        });
    });
};

get = function (page, pageSize, camera) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('photos');
            let query = {};
            if(camera) {
                query.cameraName = camera;
            }
            collection.find(query).sort({ earthDate: -1 }).skip(page * pageSize).limit(pageSize).toArray(function (err, photos) {
                resolve(photos);
                db.close();
            })
        })
    })
};

deleteAll = function () {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.remove().then(function () {
                resolve();
                db.close();
            })
        })
    })
}

findLastPhotosDate = function (roverName) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.find().sort({ earthDate: -1 }).limit(1).toArray(function (err, photos) {
                resolve(photos[0] ? moment(photos[0].earthDate, 'YYYY-MM-DD') : null)
            });
            
        })
    })
}

module.exports = {
    insert, get, deleteAll, findLastPhotosDate
};