// const Gaurav = require('express')
// const ok = Gaurav();


const express = require('express')
const app = express();
const path = require('path');

const PORT = 5000;



app.use(express.static(path.join(__dirname, 'public')));


//request
// 1 params
app.get('/student:name', (req,res) =>{
    res.send(`Hello this side ${req.params.name}.Dont need to know anything else`)

})


app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`)
})





