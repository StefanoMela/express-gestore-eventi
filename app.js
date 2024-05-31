const express = require('express');
const app = express();

const eventsRouter = require('./routers/events');
const error404 = require('./middlewares/mdwError404')
const error500 = require('./middlewares/mdwError500')

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/favicon.ico', (req,res) => {
    res.send(404);
});

app.get('/', (req, res) => {
    res.send('Benvenuto');
});

app.use('/events', eventsRouter);

app.use(error404)
app.use(error500)

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
})