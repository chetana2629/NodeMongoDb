const mongoose = require('mongoose');
async function connection (){
    var ans=await mongoose.connect('mongodb+srv://admin:admin@cluster0.hstr62w.mongodb.net/sample');
   // console.log(ans); //to check connection 
   
}

module.exports =connection;
