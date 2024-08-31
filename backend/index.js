const express = require('express');
const app = express();
const mongoConnect = require("./config/dbConfig");
require("dotenv").config();

//Import Routes
const Hello = require("./routes/hello")

//Routes
app.use("/hello", Hello);

mongoConnect();
const port = 4000


app.listen(port,()=>{
    console.log(`App is running on Port Number ${port}`);
})
