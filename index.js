const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

const customerRoute = require("./src/routes/customerPurchase.routes")

const app = express()
const port = 5000 || process.env.PORT

app.listen(port, () => {
    console.log('Running in the port ', port)
});

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => {
        console.log('conexion exitosa con MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });


app.use(express.json());
app.use("/api", customerRoute);