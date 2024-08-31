require('dotenv').config(); // Load environment variables

const MongoURL = process.env.URL;

const mongoose = require('mongoose');
mongoose.connect(MongoURL)
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const InputSchema = new mongoose.Schema({
    Name: {
        type : String,
        required : true
    },
    MobileNumber : {
        type : Number,
        required : true,
        unique : true
    },
    Password:{
        type : String,
        required : true
    },
    EmailID : {
        type: String
    },City : {
        type : String,
    },State : {
        type : String
    }
});

const Farmer = mongoose.model('Farmer', InputSchema);

module.exports = {
    Farmer
};


