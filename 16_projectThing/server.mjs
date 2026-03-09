import express from 'express'
import cors from "cors"

const app = express()
const port = 3000
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
*/

app.use(cores)


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
