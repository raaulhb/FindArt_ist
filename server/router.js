const express = require('express');
const router = express.Router();
const controller = require('./controller/controllers');

router.get('/artistList', controller.getArtist);
router.post('/artists', controller.postArtist);
router.put('/artists/:id', controller.editArtist);

module.exports = router;
