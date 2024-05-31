const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsC');


router.get('/', eventsController.index);

router.post('/store', eventsController.store);

router.put('/:event', eventsController.update);