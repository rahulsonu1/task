const express=require('express')
const app=express()
require('dotenv').config()
require('./config/database')


app.use(express.json())

app.use('/api/task',require('./routes/index'))





const port=process.env.PORT
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server at port : ${port}`)
    }
    console.log(`Server is running at port : ${port}`)
})