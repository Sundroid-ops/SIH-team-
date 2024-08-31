import mongoose, { model } from "mongoose";

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

export const Product = mongoose.models.Product || model("Product", productSchema)