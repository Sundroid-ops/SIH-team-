require('dotenv').config();

const MongoURL = process.env.URL
const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect(MongoURL)
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const InputSchema = new mongoose.Schema({
    BuyerID : {
        type: Number,
        required: true,
        unique : true   
    },
    BuisenessNumber : {
        type: String,
        required: true,
        unique: true
    },
    EmailID : {
        type: String,
        required: true,
        unique: true
    },
    MobileNumber :{ 
        type: Number,
        required: true
    },
    Password : {
        type : String,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false
    }
})

const Buyer = mongoose.model('Buyers',InputSchema)

module.exports = {
    Buyer
}

