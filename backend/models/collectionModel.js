const {mongoose} = require("mongoose");

const collectionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    }
})

// module.exports = new mongoose.model("Cart", cartSchema);

module.exports = new mongoose.model("Collection", collectionSchema)