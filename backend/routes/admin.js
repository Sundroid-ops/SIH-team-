const {Router} = require('express')
require('dotenv').config()

const {Admin , PendingBuyer} = require("../database/AdminDatabase.js");
const {Buyer} = require("../database/BuyerDatabase.js")
const JWT = require('jsonwebtoken')
const zod = require('zod');
const bcrypt = require('bcryptjs')
const jwtPass = process.env.JWT_CODE;
const router = Router();
const jwtAuthMiddleware = require("../Middleware/Auth.js")

router.post('/signup' , async(req,res) => {
    const {AdminID , Password , Name , EmailID} = req.body;
    const InputSchema = zod.object({
        AdminID : zod.string(),
        Password : zod.string(),
        Name : zod.string(),
        EmailID : zod.string().email(),
    })
   
    const ParsedInput = InputSchema.safeParse({
        AdminID,
        Password,
        Name,
        EmailID,
    })

    if(ParsedInput.success){
        const HashedAdminID = await bcrypt.hash(ParsedInput.data.AdminID , 10);
        const HashedPasseword = await bcrypt.hash(ParsedInput.data.Password , 10);

        const ExistingUser = await Admin.findOne({
            EmailID : ParsedInput.data.EmailID
        })

        if(ExistingUser){
            return res.status(400).json({
                message: "User already Registered ... please proceed to login page"
            });
        }else{
            await Admin.create({
                AdminID : HashedAdminID,
                Password : HashedPasseword,
                Name : ParsedInput.data.Name,
                EmailID : ParsedInput.data.EmailID,
            })

            try{
                const token = JWT.sign({AdminID : ParsedInput.data.AdminID} , jwtPass);
                res.json(token);
            }catch(err){
                res.json({message : "failed to create token" , error : err.message})
            }
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials .. please try again",
            error : ParsedInput.error.errors
        })
    }
});

router.post('/login' , async(req,res) => {
    const {AdminID , Password , EmailID} = req.body;

    const InputSchema = zod.object({
        AdminID: zod.string(),
        Password: zod.string(),
        EmailID : zod.string().email()
    })

    const ParsedInput = InputSchema.safeParse({
        AdminID,
        EmailID,
        Password
    })

    if(ParsedInput.success){
        try{
            const ExistingUser = await Admin.findOne({
                EmailID : ParsedInput.data.EmailID
            })

            if(!ExistingUser){
                return res.status(404).json({
                    message: "User not found. Please register first."
                });
            }else{
                const IsCorrectPassword = await bcrypt.compare(ParsedInput.data.Password ,ExistingUser.Password)
                const IsCorrectAdminID = await bcrypt.compare(ParsedInput.data.AdminID , ExistingUser.AdminID)

                if(!IsCorrectAdminID || !IsCorrectPassword){
                    return res.status(401).json({
                        message: "Incorrect AdminID or password. Please try again."
                    });
                }else{
                    const token = JWT.sign({AdminID : ExistingUser.AdminID} , jwtPass);
                    res.json(token)
                }
            }
        }catch(err){
           res.json({message : "Input Processing Error " , error : err.message})
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials .. please try again",
            error : ParsedInput.error.errors
        })
    }
})

router.get('/UnverifiedBuyer' , jwtAuthMiddleware , async(req,res) => {
    try{
        const pendingBuyer = await PendingBuyer.find({isVerified : false});
        res.json(pendingBuyer);
    }catch(err){
        res.status(500).json({message : "failed to retrieve buyer" ,  error : err.message})
    }
});

router.post('/:BuyerID/VerifyBuyer' , jwtAuthMiddleware , async(req,res) => {
    const {BuyerID} = req.params;

    try{
        const UpdatedBuyer = await Buyer.findOneAndUpdate({
            signupNumber: BuyerID,
            isVerified: true  
        })

        if(!UpdatedBuyer){
            return res.status(404).json({ message: 'Buyer not found' });
        }else{
            return res.json({message : "used verified successfully"})
        }
    }catch(err){
        res.status(500).json({ message: 'Verification failed', error: err.message });
    }

})

module.exports = router