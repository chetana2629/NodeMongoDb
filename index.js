var connection = require("./db.js")
connection()
var bodyParser = require('body-parser')
var cors = require('cors'); //to remove n/w error
var MyModel = require("./Models/usermodel.js")
var express = require('express');
var app = express();
app.use(cors()); //to remove network erro run application in react js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/resister', function (req, res) {

})

app.get('/login', function (req, res) {

})
app.get('/users', async function (req, res) {

    try {
    var ans=await MyModel.find()
    res.send(ans);
   //res.render("userdata.ejs",{data:ans})  //Rendering webpages {data} is key .it will carry in data property
    } catch (err) {
        res.send("Something went wrong");
    }

})

app.get("/add-user",function (req, res) {
    res.render("adduser.ejs")
})
app.post("/user-action",async function (req, res) {
  //  console.log(req.body);
  try{
  var record=new MyModel(req.body);  //creating instance 
  var ans=await record.save(); //save your 
  //res.redirect("/users")   
  res.send({"Message":"record inserted"})    //redirecting webpage to users

  }catch (err) {
  }
})
app.listen(7000)

