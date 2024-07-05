const express = require ('express');
const app=express();
const path= require('path')
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/coditency');

// Importing models
const addmodel= require('./models/user');
const Task = require('./models/task');

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/task',async (req,res)=>{
    const tasks = await Task.find({});
    res.render('task', { tasks });
})

app.post('/add', async (req,res)=>{
    let {questions, platform} =req.body;
    let added= await addmodel.create({
        questions: questions,
        platform: platform
    })
    res.redirect('/')
})

//route for task
app.post('/addtask', async (req,res)=>{
    const { title, description } = req.body;
    await Task.create({
      title: title,
      description: description
    });
    res.redirect('/task');
})


app.listen(3000)