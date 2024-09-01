const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/productSchema");
const {Buyer} = require("../models/BuyerDatabase");
const ChatDB = require("../models/chat");

const auth = require("../Middleware/Auth");

router.post("/add/:productID", auth, async(req, res)=>{
    try{
        console.log(req.user);
        const cart = await Cart.findOne({holder: req.user});
        if(!cart){
            const buyer = await Buyer.findById(req.user._id);
            const newCart = new Cart();
            newCart.holder = buyer;
            await newCart.save();
        }
        const product = await Product.findById(req.params.productID);
        if(!product)
            return res.status(404).json({"msg": "product is missing"});

        const order = cart.orders.find(pro => pro._id == req.params.productID);
        if(order){
            if(product.qty >= order.qty + 1)
                order.qty = order.qty+1;
        }
        else{
            const pushProduct = {
                product: order,
                qty: 1
            };
            cart.orders.push(pushProduct);
        }

        await cart.save();
        await cart.populate("orders.product");

        res.status(200).json(cart);

    }catch(err){
        console.log(err);
        res.status(500).json({"msg": err.message});
    }
});

router.post("/:cartID/remove/:productID", async(req, res)=>{
    try{
        const cart = await Cart.findOne({holder: req.user._id}).populate("orders")
        const product = await Product.findById(req.params.productID);
        if(!product)
            return res.status(404).json({"msg": "product is missing"});

        const order = cart.orders.find(pro => pro._id == req.params.productID);
        if(order){
            if(order.qty == 1)
                cart.orders.remove(order);
        }
        else{
            order.qty=order.qty-1;
        }

        await cart.save();
        await cart.populate("orders.product");
        res.status(200).json(cart);

    }catch(err){
        console.log(err);
        res.status(500).json({"msg": err.message});
    }
});

router.get("/:cartID", async(req, res)=>{
    try{
        const cart = await Cart.findById(req.params.cartID);
        if(cart)    
            return res.status(200).json(cart);

        res.status(404).json({"msg": "cart not found"});
    }catch(err){
        console.log(err.message);
        res.status(500).json({"msg": err.message});
    }
});

router.post("/:cartID/proceed", async(req, res)=>{
    try {
        const cart = await Cart.findById(req.params.cartID);
        for(const order of cart.orders){
            const findChat = await ChatDB.findOne({farmer: order.farmer._id, buyer: cart.buyer._id});

            if(!findChat){
                const createChat = new ChatDB();
                createChat.buyer = cart.holder._id;
                createChat.farmer = order.farmer._id;
            }
        }

        res.status(200).json({"msg": "please connect with your farmers"});
    } catch (error) {
        console.log(err.message);
        res.status(500).json({"msg": err.message});
    }
})

module.exports = router;