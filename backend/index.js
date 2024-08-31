const express = require('express');
const app = express();
const mongoConnect = require("./config/dbConfig");
const connectCloudinary = require("./config/cloudinary")
require("dotenv").config();

//Import Routes
const Hello = require("./routes/hello");
const productRouter  = require('./routes/ProductRoute');
const  collectionRouter  = require('./routes/CollectionsRoute');

mongoConnect();
const port = 4000
connectCloudinary();

app.use(express.json())

//Routes
app.use("/hello", Hello);
app.use("/api/product", productRouter)
app.use("/api/collection", collectionRouter)

app.listen(port,()=>{
    console.log(`App is running on Port Number ${port}`);
})
