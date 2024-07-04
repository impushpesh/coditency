const express = require ('express');
const app=express();
const path= require('path')

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/progress',(req,res)=>{
    res.render('progress');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/task',(req,res)=>{
    res.render('task');
})


app.listen(3000)