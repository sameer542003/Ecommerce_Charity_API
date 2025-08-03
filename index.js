const express = require("express")
const app = express()
app.use(express.json());
const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.PORT || 8080
const url = process.env.URL

const userRoutes=require("./routes/user")
const categoryRoutes = require("./routes/category")

function connectToMongoDB() {
    try {
        console.log("connected to the database✅");
        mongoose.connect(url)

    } catch (err) {
        console.log(err);

    }
}
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/category", categoryRoutes);



app.get("/", (req, res) => {
    res.send("Welcome to E-commerce charity")
})
app.listen(port, () => {
    connectToMongoDB()
    console.log("server is running at port 3000");

})