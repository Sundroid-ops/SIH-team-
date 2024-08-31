const {mongoose} = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    collections: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    }
})


module.exports = new mongoose.modle("Product", productSchema)