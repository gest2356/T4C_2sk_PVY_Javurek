import express from 'express';

const app = express()
const port = 3000

app.use(express.json());

app.get('/users',  async (req, res) => {
    res.send([{
        username: "John",
        password: "123456"
    }])
})

app.get('/:str', (req, res) => {
    res.send(req.params.str)
})


app.post('/',  async (req, res) => {
    res.send("dsa")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
