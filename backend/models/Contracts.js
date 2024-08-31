const {mongoose} = require("mongoose");

const contractSchema = new mongoose.Schema({
    Buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer"
    },
    Farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmer"
    },
    Exp_delievery_date: Date,
    final_amount: Number,
    advance_payemt: Number,
    clauses: [
        {
            type: String
        }
    ]
});

module.exports = mongoose.model("Contract", contractSchema);