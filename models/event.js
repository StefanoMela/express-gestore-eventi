const fs = require('fs');
const eventsDB = require('../data/events.json')

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }
    static saveEvent(newEvent, eventsDB) {
        
    }

    static readEvent(event) {
        
    }
}
