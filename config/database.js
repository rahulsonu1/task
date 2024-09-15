const mongoose=require('mongoose');
const dburl=process.env.dbURL
mongoose.connect(dburl);

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log("successfully connected to DataBase");
})