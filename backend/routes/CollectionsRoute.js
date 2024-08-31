import {v2 as cloudinary} from "cloudinary";
const Collection = require('../models/collectionModel')
const express = require('express');
const upload = require('../Middleware/multer')

const collectionRouter = express.Router();


const addCollection = async(req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});


        const collectionData = {
            name,
            desc,
            image:imageUpload.secure_url
        }
        
        const collection = Collection(collectionData); 
        await collection.save();   
        res.json(({
            success: true,
            message: "Collection added successfully"
        }))
    } catch (error) {
        console.log(error)

        res.json({
            success: false
        })
    }
}

const listCollection = async(req, res) => {
    try{
        const allCollection = await Collection.find({})
        res.json({success: true, collection: allCollection})
        } catch (error) {
            res.json({success: false})
    }
}

collectionRouter.post('/add', upload.single('image'), addCollection);
collectionRouter.get('/list', listCollection)

module.exports = collectionRouter;
