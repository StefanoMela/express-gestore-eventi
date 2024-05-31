const eventsDB = require('../data/events.json')
const path = require("path");
const fs = require('fs');
const { json } = require('express');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    static saveEvent(newEvent) {
        const existingEvent = eventsDB.find(event => event.id === newEvent.id);
        if (existingEvent) {
            throw new Error(`L'id ${newEvent.id} esiste già`);
        }

        let maxId = eventsDB.reduce((max, event) => (event.id > max ? event.id : max), 0);
        newEvent.id = maxId + 1;

        eventsDB.push(newEvent);

        const filePath = path.join(__dirname, '../data/events.json');
        const dataToJson = JSON.stringify(eventsDB);

        fs.writeFileSync(filePath, dataToJson);

        return newEvent;
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

    static modifyEvent(id, newEvent) {
        let updatedEvent = null;

        // Cerca l'evento con l'id specificato e aggiorna i suoi campi con i nuovi valori
        const updatedEvents = eventsDB.map(event => {
            if (event.id === id) {
                updatedEvent = {
                    ...event,
                    title: newEvent.title !== undefined ? newEvent.title : event.title,
                    description: newEvent.description !== undefined ? newEvent.description : event.description,
                    date: newEvent.date !== undefined ? newEvent.date : event.date,
                    maxSeats: newEvent.maxSeats !== undefined ? newEvent.maxSeats : event.maxSeats,
                };
                return updatedEvent;
            }
            return event;
        });

        // Se l'evento è stato aggiornato, sovrascrivi il file JSON con i dati aggiornati
        if (updatedEvent) {
            const filePath = path.join(__dirname, '../data/events.json');
            const dataToJson = JSON.stringify(updatedEvents);
            fs.writeFileSync(filePath, dataToJson);
        }

        return updatedEvent;
    }

}

module.exports = Event;