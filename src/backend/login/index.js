const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcryptjs')
const farmerRouter = require("../src/farmer/routes/farmer")
const buyerRouter = require("../src/buyer/routes/buyer")
const adminRouter = require("../src/admin/routes/admin")
const port = process.env.PORT
    
app.use(express.json())
app.use(bodyParser.json())

app.use("/farmer" , farmerRouter)
app.use("/buyer" , buyerRouter)
 app.use("/admin",adminRouter)


app.listen(port,()=>{
    console.log(`App is running on Port Number ${port}`)
})
