import { v2 as cloudinary } from "cloudinary";
import { Collection } from "../models/collectionModel.js";

const addCollection = async(req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});

        const collectionData = {
            name,
            desc,
            image: imageUpload.secure_url
        }

        const collection = Collection(collectionData);
        await collection.save();

        res.json(({
            success: true,
            message: "Collection added successfully"
        }))
    } catch (error) {
        console.log(error);
        
        res.json({
            success: false
        })
    }
}

const listCollection = async(req, res) => {
    try{
        const allcollection = await Collection.find({})
        res.json({success: true, collection: allcollection})
    }catch(error) {
        res.json({success: false})
    }
}