const express = require("express")
const app = express()
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.PORT || 8080
const url = process.env.URL

const userRoutes=require("./routes/user")
const categoryRoutes = require("./routes/category")
const charityRoutes = require("./routes/charity")
const productRouter = require("./routes/product");
const addressRouter = require("./routes/address");
const orderRoutes = require("./routes/order");


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
app.use("/api/v1/charity", charityRoutes);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/address", addressRouter);
app.use("/api/v1/orders", orderRoutes);


app.get("/", (req, res) => {
    res.send("Welcome to E-commerce charity")
})
app.listen(port, () => {
    connectToMongoDB()
    console.log(`server is running at port ${port}`);
})