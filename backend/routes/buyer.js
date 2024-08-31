const {Router} = require('express')
require('dotenv').config()

const {Buyer} = require("../models/BuyerDatabase.js");
const Cart = require("../models/Cart.js");
const JWT = require('jsonwebtoken')
const zod = require('zod');
const bcrypt = require('bcryptjs')
const jwtPass = process.env.JWT_CODE;
const router = Router();


router.post('/signup'  ,async(req,res) => {
    const {BuisenessNumber , Password , EmailID , MobileNumber} = req.body

    const InputSchema = zod.object({
        BuisenessNumber : zod.string(),
        Password : zod.string(),
        EmailID : zod.string().email(),
        MobileNumber : zod.string().length(10)
    })

    const ParsedInput = InputSchema.safeParse({
        BuisenessNumber,
        Password,
        EmailID,
        MobileNumber
    })

    if(ParsedInput.success){
        
        const HashedPassword = await bcrypt.hash(ParsedInput.data.Password , 10);
        const HashedBuisenessNumber = await bcrypt.hash(ParsedInput.data.BuisenessNumber , 10);
        const BuyerID = Math.floor(Math.random() * 100000)
        
        const ExistingUser = await Buyer.findOne({
            EmailID : ParsedInput.data.EmailID
        })

        if(ExistingUser){
            return res.status(400).json({
                message: "User already Registered ... please proceed to login page"
            });
        }else{
            await Buyer.create({
                BuyerID : BuyerID,
                BuisenessNumber : HashedBuisenessNumber,
                Password : HashedPassword,
                EmailID : ParsedInput.data.EmailID,
                MobileNumber : ParsedInput.data.MobileNumber,
                isVerified : false
            })
            try{
                const token = JWT.sign({BuisenessNumber : ParsedInput.data.BuisenessNumber},jwtPass)
                res.json(token)
            }catch(error){
                res.json({ message: "Failed to create JWT token", error: error.message })
            }
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials .. please try again",
        })
    }
})

router.post('/login' , async (req, res) => {
    const { EmailID, Password } = req.body;

    const InputSchema = zod.object({
        EmailID: zod.string().email(),
        Password: zod.string()
    });

    const ParsedInput = InputSchema.safeParse({
        EmailID,
        Password
    });
       
    if(ParsedInput.success){
        try{
            const ExistingUser = await Buyer.findOne({
                EmailID : ParsedInput.data.EmailID
            })

            if(!ExistingUser){
                return res.status(404).json({
                    message: "User not found. Please register first."
                });
            }else{
                if(ExistingUser.Cart == null){
                    const cart = new Cart();
                    cart.holder = ExistingUser;
                    cart.save();
                    ExistingUser.Cart = cart;
                    await ExistingUser.save();
                    console.log(cart);
                    console.log(ExistingUser);
                }
                const IsCorrectPassword = await bcrypt.compare(ParsedInput.data.Password , ExistingUser.Password);
                if(!IsCorrectPassword){
                    return res.status(401).json({
                        message: "Incorrect password. Please try again."
                    });
                }else{
                    const token = JWT.sign({BuisenessNumber : ExistingUser.BuisenessNumber} , jwtPass)
                    res.json(token);
                }
            }
        }catch(err){
            res.json({message : "Input Processing Error ",error : err.message})
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials .. please try again",
            error : ParsedInput.error.errors
        })
    }
});


module.exports = router;
