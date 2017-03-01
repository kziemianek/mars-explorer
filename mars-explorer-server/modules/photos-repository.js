var MongoClient = require('mongodb').MongoClient;
var Promise = require('promise');
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

get = function (page, pageSize) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.find().skip(page*pageSize).limit(pageSize).toArray(function (err, photos) {
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

module.exports = {
    insert, get, deleteAll
};