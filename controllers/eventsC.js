const eventModel = require('../models/event');

const index = (req, res) => {

};

const store = (req, res) => {

};

const update = (req, res) => {

};

const single = (req, res) => {
    const eventId = parseInt(req.params.id);
    const requiredEvent = eventModel.getEventByID(eventId);
    if (!requiredEvent) {
        return res.status(404).send('Evento non trovato');
    }
    res.json(requiredEvent);
}

const all = (req, res) => {
    const events = eventModel.getAllEvents();
    res.json(events);
}

module.exports = {
    index,
    store,
    update,
    single,
    all,
}