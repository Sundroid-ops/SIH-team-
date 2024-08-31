const {Router} = require('express')
require('dotenv').config()

const {Farmer} = require("../database/FarmerDatabase.js");
const JWT = require('jsonwebtoken');
const zod = require('zod');
const bcrypt = require('bcryptjs')
const jwtPass = process.env.JWT_CODE;
const router = Router();


router.post('/signup' , async(req,res) => {

    const {Name , MobileNumber , Password , EmailID , City , State} = req.body;
    const InputSchema = zod.object({
        MobileNumber : zod.string().length(10),
        Password : zod.string(),
        Name : zod.string(),
        EmailID : zod.string(),
        City : zod.string(),
        State : zod.string(),
    })

    const ParsedInput = InputSchema.safeParse({
        MobileNumber,
        Password,
        Name,
        EmailID,
        City,
        State
    })

    if(ParsedInput.success){
        const HashedPassword = await bcrypt.hash(ParsedInput.data.Password , 10);

        const ExistingUser = await Farmer.findOne({
            MobileNumber : MobileNumber
        })

        if(ExistingUser){
            return res.status(400).json({
                message: "User already Registered ... please proceed to login page"
            });
        }else{
          await Farmer.create({
            MobileNumber : ParsedInput.data.MobileNumber,
            Password : HashedPassword,
            Name : ParsedInput.data.Name,
            EmailID : ParsedInput.data.EmailID,
            City : ParsedInput.data.City,
            State : ParsedInput.data.State
          })
         
          try{
            const token = JWT.sign({MobileNumber : ParsedInput.data.MobileNumber} , jwtPass)
            res.json(token)
          }catch(error){
            res.json({ message: "Failed to create JWT token", error: error.message })
          }
        }
    }
});

  router.post('/login' ,async (req,res) => {
    
    const {MobileNumber , Password} = req.body;

    const InputSchema = zod.object({
        MobileNumber : zod.string().length(10),
        Password : zod.string()
    })

    const ParsedInput = InputSchema.safeParse({
        MobileNumber,
        Password
    })

    if(ParsedInput.success){
       
       try{
            const ExistingUser = await Farmer.findOne({
                MobileNumber : ParsedInput.data.MobileNumber
            })

            if(!ExistingUser){
                return res.status(404).json({
                    message: "User not found. Please register first."
                });
            }else{
                const IsCorrectPassword = await bcrypt.compare(ParsedInput.data.Password , ExistingUser.Password);
                if(!IsCorrectPassword){
                    return res.status(401).json({
                        message: "Incorrect password. Please try again."
                    });
                }else{
                    const token = JWT.sign({MobileNumber : ExistingUser.MobileNumber} , jwtPass)
                    res.json(token);
                }
            }
       }catch(error){
            console.log({message : "Input Processing Error " , error : error.message})
       }
    }else{
        res.status(403).json({
            message: "Invalid input credentials .. please try again",
            errors: ParsedInput.error.errors // Optional: Send validation errors for debugging
        });
    }
});
module.exports = router;