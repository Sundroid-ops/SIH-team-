const {mongoose} = require("mongoose");

const cartSchema = new mongoose.Schema({
    holder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer"
    },

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },

            qty: {
                type: Number,
                min: 1,
                required: true
            }
        }
    ]

});

module.exports = new mongoose.model("Cart", cartSchema);