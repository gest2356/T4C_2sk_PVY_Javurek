import express from 'express'
import cors from "cors"
import mysql from 'mysql'
import {connectToMysql, qeryMyql} from "./db/db.mjs";

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

app.get('/api/rooms', (req, res) => {
    const pool = connectToMysql();

    const resaltFromDb = qeryMyql(pool, "SELECT * FROM rooms");

    res.send(resaltFromDb);
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
