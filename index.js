const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.PORT || 8080
const url = process.env.URL

function connectToDB(){
    try {
        mongoose.connect(url)
        console.log("connected to DB✅");
    } catch (err) {
        console.log("error connecting to DB");
    }
}


app.get("/",(req,res)=>{
    res.send("hello world")
})




app.listen(port,()=>{
    connectToDB()
    console.log(`server running on port ${port}`);
})