 const mongoose = require('mongoose');

 function connect(){
    mongoose.set("strictQuery", false);
    return mongoose.connect(process.env.DB_URL,() => {
        console.log("Connected to MongoDB");
      })
 }



 module.exports = connect