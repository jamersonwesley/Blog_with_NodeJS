const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post('/',(req,res)=>{
       tasks.push(req.body.task);
       res.render('index',{tasklist:tasks});
})
app.post('/deletar/:id',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasklist:tasks});
})

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    if(req.query.busca == null){
        res.render('home',{})
    }else
    {res.send("Você buscou  " + req.query.busca)}
})

app.get('/:slug',(req,res)=>{
    res.send(req.params.slug)
})

app.listen(5000,()=>{
    console.log('rodando');
})