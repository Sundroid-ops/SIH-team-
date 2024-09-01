const mongoose = require("mongoose");
const {Schema} = mongoose;

const cartSchema = new mongoose.Schema({
    holder: {
        type: Schema.Types.ObjectId,
        ref: "Buyer"
    },

    orders: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },

            qty: {
                type: Number,
                default: 1
            }
        }]
    },
    default: []
});

module.exports = mongoose.model("Cart", cartSchema);