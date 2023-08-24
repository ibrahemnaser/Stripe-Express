const express = require('express')
const bodyParser = require('body-parser')

// constants
const PORT = 5050;

// routes imports
const paymentRoute = require('./src/routes/payment')

// express app;
const app = express();

// middlewares
app.use(bodyParser.json())

// routes middlewares
app.use('/payments', paymentRoute)

// initial route
app.get('/', (req, res) => {
    res.send('<h2>Hello Stripe</h2>');
});

// port listen
app.listen(PORT, () => {
    console.log("=========================<>===================")
    console.log("Express server is running on port {", PORT, "}")
    console.log("=========================<>===================")
})