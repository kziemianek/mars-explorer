var express = require('express')
var router = express.Router();
var photosRepository = require('./photos-repository');

router.get('/', function (req, res) {
    let page = req.query.page;
    let pageSize = req.query.pageSize
    photosRepository.get(parseInt(page), parseInt(pageSize)).then((photos) => res.send(photos));
});

router.delete('/', function (req, res) {
    photosRepository.deleteAll().then(() => res.send('removed'));
})

module.exports = router;