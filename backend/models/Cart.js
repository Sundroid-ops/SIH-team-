const {mongoose} = require("mongoose");
const Product = require("./productSchema");

const cartSchema = new mongoose.Schema({
    holder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer"
    },

    orders: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            qty: Number
        }, {_id: false}
    ]
});

module.exports = mongoose.model("Cart", cartSchema);