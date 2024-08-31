import { v2 as cloudinary } from "cloudinary";
const { Product } = require('../models/productSchema')
const express = require('express');

const productRouter = express.Router();

const addProduct = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const collections = req.body.collections;
        const imageFile = req.files.image[0];

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const productData = {
            name,
            desc,
            collections,
            image: imageUpload.secure_url
        }

        const product = Product(productData);
        await product.save();

        res.json({ success: true, message: "Product added " })
    } catch (error) {
        res.json({success:false})
    }
}

const listProduct = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        res.json({success: true, products: allProducts})
    } catch (error) {
        res.json({success: false})
    }
}

const removeProduct = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed"})
    } catch (error) {
        res.json({success: false})
    }
}

productRouter.post('/add', upload.fields([{name: 'image', maxCount:1}]), addProduct)
productRouter.get('/list', listProduct)
productRouter.post('/remove', removeProduct)

module.exports = productRouter;