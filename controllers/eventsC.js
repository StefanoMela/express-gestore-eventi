const eventModel = require('../models/event');


const index = (req, res) => {
    const filteredEvents = eventModel.getEventsByQuery(req.query);
    res.json(filteredEvents);
};

const store = (req, res) => {
    const { title, description, date, maxSeats } = req.body;
    const newEvent = new eventModel(1, title, description, date, maxSeats)
    eventModel.saveEvent(newEvent)
    res.json(newEvent);
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


module.exports = {
    index,
    store,
    update,
    single,
}