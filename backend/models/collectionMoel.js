import mongoose, { model }  from "mongoose";

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

export const Collection = mongoose.models.Collection || model("Collection", collectionSchema)