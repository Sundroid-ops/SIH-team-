const router = require("express").Router();
const multer = require("multer");

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const Chat = require("../models/chat")
const { appStore, ID, InputFile } = require("../config/appwriteConfig")

const { exiftool } = require('exiftool-vendored');

const exif =  async (filePath) => {
    try {
        const metadata = await exiftool.read(filePath);
        console.log(metadata);
    } catch (err) {
        console.error('Error extracting EXIF data:', err);
    }
}

router.post("/:chatID", upload.single("image"), async(req, res)=>{
    try {
        let chat = await Chat.findById(req.params.chatID);
        console.log(req.file.path);
        await exif(req.file.path)
        return res.send("gggg");
        const file = await appStore.createFile(
            process.env.appwrite_BUCKET_ID,
            ID.unique(),
            InputFile.fromBuffer(req.file.buffer, req.file.originalname));

        const url = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.appwrite_BUCKET_ID}/files/${file.$id}/preview?project=${process.env.appwrite_PROJECT_ID}`;
        chat.images_url.push(url);
        await chat.save();
        res.status(200).json({"chat": chat});
    } catch (err) {
        console.log(err);
        res.status(500).json({"msg": "server error"});
    }
});

router.get("/:chatID", async(req, res)=>{
    try {
        const chat = await Chat.findById(req.params.chatID)
        if(!chat)
            return res.status(404).json({"msg": "chat not found"});

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(500).json({"msg": "server error"});
    }
})

module.exports = router;