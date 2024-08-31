const express = require('express');
const app = express();
const mongoConnect = require("./config/dbConfig");
require("dotenv").config();

//Import Routes
const Hello = require("./routes/hello");
const productRouter  = require('./routes/ProductRoute');
const  collectionRouter  = require('./routes/CollectionsRoute');

//Routes
app.use("/hello", Hello);
app.use("/api/product", productRouter)
app.use("/api/collection", collectionRouter)

mongoConnect();
const port = 4000


app.listen(port,()=>{
    console.log(`App is running on Port Number ${port}`);
})
