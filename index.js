const express = require('express')
const bodyParser = require('body-parser')

// constant
const PORT = 5050;

// express app;
const app = express();

// middlewares
app.use(bodyParser.json())

// initial route
app.get('/', (req, res) => {
    res.send('<h2>Simple Express Server</h2>');
});

// port listen
app.listen(PORT, () => {
    console.log("=========================<>===================")
    console.log("Express server is running on port {", PORT, "}")
    console.log("=========================<>===================")
})