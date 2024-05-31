const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsC');


router.get('/', eventsController.index);

router.get('/all', eventsController.all);

router.get('/:id', eventsController.single);

router.post('/store', eventsController.store);

router.put('/:event', eventsController.update);

module.exports = router;