const express = require('express')
const app = express();

const PORT = 3000;



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/about:student', (req,res) => {
//     res.send(`<h1>Hello ${req.params.student}</h1>`)
// })


//query params  about?name= gaurav
app.get('/city', (req,res) => {
    res.send(`<h1>Hello ${req.query.name}</h1>`)
})



app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`)
})
