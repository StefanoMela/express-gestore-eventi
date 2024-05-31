const eventsDB = require('../data/events.json')
const path = require("path");
const fs = require('fs');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;

    }

    static saveEvent(fileName, newEvent) {
        fileName = 'events';
        const existingEvent = eventsDB.find(event => event.id === newEvent.id);
        !existingEvent ? eventsDB.push(newEvent) : new Error(`L/n\'id ${newEvent.id} esiste già`)
        const filePath = path.join(__dirname, '../' + 'data/' + fileName + ".json");
        const dataToJson = JSON.stringify(eventsDB);
        fs.writeFileSync(filePath, dataToJson);
    }

    static readEvent(fileName) {
        fileName = 'events'
        const filePath = path.join(__dirname, '../' + 'data/' + fileName + ".json");
        const dataToRead = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(dataToRead)
    }

    static getEventByID(id) {
        return eventsDB.find(event => event.id === id);
    }

    static getAllEvents() {
        return eventsDB;
    }

    static getEventsByQuery(query) {
        const { title, date } = query;
        const filteredEvents = eventsDB.filter(event => {
            return (!title || event.title === title) && (!date || event.date === date);
        });
        if (filteredEvents.length === 0) {
            throw new Error('Non ci sono eventi corrispondenti ai criteri di ricerca.');
        }
        return filteredEvents;
    }
}

const evento1 = new Event(1, 'Il mio primo evento', 'Una bellissima festa', 25/5/21, 234);
const evento2 = new Event(2, 'Il mio secondo evento', 'Una tristissima festa', 20/2/21, 234);

Event.saveEvent(eventsDB, evento1);
Event.saveEvent(eventsDB, evento2);

const events = Event.readEvent('events');

// console.log(events);

module.exports = Event;