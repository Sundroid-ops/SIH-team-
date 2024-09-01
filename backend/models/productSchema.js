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
        type:String
    },
    qty: Number,
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmer"
    }
})

module.exports = new mongoose.model("Product", productSchema)