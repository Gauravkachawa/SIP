const express = require('express')
const app = express();
const path = require('path');

const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/submit', (req,res) =>{
    res.send(`my name is  ${req.query.username} and my city is ${req.query.city}`)
})

app.post('/submit', (req,res) =>{
    res.send(`my name is  ${req.body.username} and my city is ${req.body.city}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`)
})