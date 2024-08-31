const express = require('express');
const app = express();
const mongoConnect = require("./config/dbConfig");
require("dotenv").config();

//Import Routes
//const productRouter  = require('./routes/ProductRoute');
const collectionRouter = require('./routes/CollectionsRoute');
const Buyer = require("./routes/buyer");
const Cart = require("./routes/cart");

app.use(express.json());
//Routes
//app.use("/api/product", productRouter)
app.use("/api/collection", collectionRouter)
app.use("/api/buyer", Buyer)
app.use("/api/cart", Cart)

mongoConnect();
const port = 4000


app.listen(port,()=>{
    console.log(`App is running on Port Number ${port}`);
})
