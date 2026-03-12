import express from 'express'
import cors from "cors"
import mysql from 'mysql'

const app = express()
const port = 3000

const connection = mysql.createConnection({
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});


connection.connect();

connection.query('SELECT * FROM rooms', (err, resalt) => {
    if (err) throw err

    console.log(resalt)
})

connection.end()

app.get('/api/rooms', (req, res) => {
    res.send([
        {
            id: 1,
            roomNumber: "489",
            building: "campus",
            capacity: "45",
            type: "room",
        }
    ])
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
