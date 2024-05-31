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
        const filePath = path.join(__dirname, '..' + 'data' + fileName + ".json");
        const dataToJson = JSON.stringify(newEvent)
        fs.writeFileSync(filePath, dataToJson);
    }

    static readEvent(event) {
        const filePath = path.join(__dirname, '..' + 'data' + fileName + ".json");
        const dataToRead = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(dataToRead)
    }
}

const evento1 = new Event(1, 'Il mio primo evento', 'Una bellissima festa', 'stasera', 234);

Event.saveEvent(eventsDB, evento1);

Event.readEvent(evento1);