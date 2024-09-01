const stripe = require("stripe")(process.env.stripe_API_KEY);
const router = require("express").Router();

router.post("/direct", async(req, res)=>{
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'abc'
                    },
                    unit_amount: 50 * 100
                },
                quantity: 1
            },
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'xyz'
                    },
                    unit_amount: 20 * 100
                },
                quantity: 2
            }            
        ],
        mode: "payment",
        success_url: `${"http://localhost:4000"}/stripe/direct/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${"http://localhost:4000"}/stripe/direct/cancel`
    })
    res.status(200).json({"url":session.url});
})

router.get("/direct/complete", async(req, res)=>{
    try {
        const result = Promise.all([
            stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
            stripe.checkout.sessions.listLineItems(req.query.session_id)
        ])
    
        console.log(JSON.stringify(await result))
    
        res.send('Your payment was successful')
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg": error.message})
    }
})

module.exports = router;