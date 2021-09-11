const express= require("express");
app=express();
const path=require('path');
var bodyParser = require("body-parser");
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:/signup',{useNewUrlParser: true});
const port=1376;
const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone_no: String
  });
const info = mongoose.model('signup', signupSchema);
app.use(express.urlencoded({
  extended: true
}));
app.use('/static',express.static('static'));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const param={ };
    res.status(200).render('html.pug',param);
})
app.get('/about',(req,res)=>{
    const param={ };
    res.status(200).render('about.pug',param);
})
app.get('/contact',(req,res)=>{
    const param={ };
    res.status(200).render('contact.pug',param);
})
app.get('/signup',(req,res)=>{
    res.status(200).render('signup.pug');
})
app.post('/signup', (req, res)=>{
    var myData = new info(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
    })
})

app.listen(port,()=>{
    console.log(`we are succefully run in port ${port}`);
})