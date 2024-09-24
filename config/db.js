const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGOURL}expensetracker`);

const conn = mongoose.connection;

conn.on("open",()=>{
    console.log("Database Connected");
});

conn.on("error",(err)=>{
    console.log("Database Error: ",err);
})

module.exports = conn;
