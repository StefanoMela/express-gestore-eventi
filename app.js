const express = require('express');
const app = express();

const eventsRouter = require('./routers/eventsR');

app.use(express.json());

app.get('/favicon.ico', (req,res) => {
    res.send(404);
});

app.get('/', (req, res) => {
    res.send('Benvenuto');
});

// app.use('/events', eventsRouter);

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
})