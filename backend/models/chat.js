const {mongoose} = require("mongoose");
const Product = require("./productSchema");

const chatSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer"
    },

    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmer"
    },

    images_url: [{
        type: String
    }]
});

module.exports = mongoose.model("Chat", chatSchema);