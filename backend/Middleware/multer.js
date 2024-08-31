const path = require('path')
const multer = require("multer");

const storage = multer.diskStorage({
    filename:  function(req, file, callback) {
        const unique = Date.now()+path.extname(file.originalname);
        callback(null, file.filename + '-' + unique);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null, true);
    }else{
        callback(new Error('Only jpeg and png files only acceptable'), false)
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: 5*1024*1024}
});
const upload = multer({storage})
module.exports =  upload;
