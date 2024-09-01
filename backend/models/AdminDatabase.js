
const mongoose = require('mongoose')
const MongoURL = process.env.DB_URL

mongoose.connect(MongoURL)
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const InputSchema = new mongoose.Schema({
    AdminID : {
        type : String,
        required : true,
    },
    Password : {
        type : String,
        required : true,
    },
    Name :  {
        type : String,
        required : true,
    },
    EmailID :  {
        type : String,
        required : true,
    }
})

const Admin = mongoose.model('Admin',InputSchema)

module.exports = {
    Admin
}