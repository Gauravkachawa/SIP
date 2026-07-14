// const Gaurav = require('express')
// const ok = Gaurav();


const express = require('express')
const app = express();
const path = require('path');

const PORT = 5000;

app.get("/",(req,res) => {res.send("Welcome")});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/Mern', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.listen(5000);

app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`)
})





