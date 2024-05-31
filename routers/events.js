const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsC');

router.get('/', eventsController.index);

router.put('/:id', eventsController.update);

router.post('/store', eventsController.store);


module.exports = router;