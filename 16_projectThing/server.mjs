import express from 'express'
import {connectToMysql, queryMysql} from "./db/db.mjs";

import {Room} from "./classes/room.js";
import {Equipment} from "./classes/equipment.js";
import {Logger} from "./classes/logger.js";
import {loggingMiddleware} from "./middleware/logging.middleware.mjs";

const app = express()
const port = 3000


app.use(express.json())
app.use(loggingMiddleware)
/*
const connection = mysql.createConnection({
})
*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

const logger = new Logger("server");


/*
connection.connect();

connection.query('SELECT * FROM rooms', (err, resalt) => {
    if (err) throw err

    console.log(resalt)
})

connection.end()
*/

app.get('/api/rooms', async (req, res) => {

    const pool = await connectToMysql();

    const response = await queryMysql(pool, "SELECT * FROM rooms", []);

    const rooms = response.map(result => new Room(result));

    res.json(rooms);
})

app.get('/api/equipment', async (req, res) => {

    const pool = await connectToMysql();

    const response = await queryMysql(pool, "SELECT * FROM equipment", []);

    const equipments = response.map(result => new Equipment(result));

    res.json(equipments);
})

app.get('/api/rooms/:roomId', async (req, res) => {

    const id = req.params.roomId;

    const pool = await connectToMysql();
    const response = await queryMysql(pool, "SELECT * FROM rooms WHERE Id = ?", [id]);

    res.json(response);

})

app.post('/api/rooms', async (req, res) => {
    const pool = await connectToMysql();

    const {RoomNumber, Building, Type, Capacity} = req.body;

    try {
       const [data] = await pool.query('INSERT INTO rooms(roomnumber, building, Type, Capacity) VALUES (?,?,?,?)',[RoomNumber, Building, Type, Capacity] );
       const res = await queryMysql(pool, 'SELECT * FROM rooms WHERE Id = ?', [data])


    }
    catch (error) {
        console.log(error);
    }

})

app.get(`/api/equipment/autocomplete/:keyword`, async (req, res) => {
    const pool = await connectToMysql();
    const thingToSearch = req.params.keyword

    const [data] = await pool.query('SELECT * FROM  equipment WHERE name LIKE ? LIMIT 5', [`%${thingToSearch}%`]);

    res.json(data);
})

app.listen(port, () => {
    logger.log(`Server started on port: ${port}`)
})
