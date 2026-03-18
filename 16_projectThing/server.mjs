import express from 'express'
import {connectToMysql, queryMysql} from "./db/db.mjs";

import {Room} from "./classes/room.js";
import {Equipment} from "./classes/equipment.js";

const app = express()
const port = 3000
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


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
