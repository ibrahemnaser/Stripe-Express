const express = require('express');
const router = express.Router();

// stripe secret key
const stripe = require('stripe')('sk_test_51NfJ4lEJbmKmsYqWeVli8pWpSrIhomHGJymhD3e5BGnwLXnnx1U2oFWm2xn5COBjTl1ZNow67smcej2wq85s1dbH005jGpsYvL');

// stripe intents
router.post('/create-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
})

// subscription
router.post('/stripe-subscripe', (req, res) => {

})


// initial route
router.get('/', (req, res) => {
    res.send('<h3>HELLO PAYMENT ROUTE</h3>')
})

module.exports = router