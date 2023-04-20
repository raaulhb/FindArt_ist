const express = require('express');
const router = express.Router();
const controller = require('./controller/controllers');

router.get('/artists', controller.getArtist);
router.post('/artists', controller.postArtist);

module.exports = router;
