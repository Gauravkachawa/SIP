const express = require('express')
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/task', (req,res) =>{
//     res.send(`my task is  ${req.query.inpt}`)
// })

let todos =['Singing'];

app.get('/addtask', (req,res) =>{
    let {work} = req.query;
    console.log(work);
    if(work !=""){
        todos.push(work);
    }
    res.send(todos);
    // res.redirect('/todos')
})

app.get('/todos', (req,res) =>{
    res.send(todos)
})

app.get('/increase', (req,res)=>{
    let {work} = req.query;
    let idx = todos.indexOf(work);
    console.log(idx);
    if(idx > 0 && idx < todos.length){
        let temp = todos[idx];
        todos[idx] = todos[idx-1];
        todos[idx-1]  = temp;
    }
    res.send(todos)
})

// app.post('/task', (req,res) =>{
//     res.send(`my task is  ${req.body.task} `)
// })

app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`)
})