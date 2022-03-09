const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

const app = express();
const port = process.env.PORT || '5000'

app.use(cors());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/TodoDB");

const todoRouter = require('./Router/todoRouter');
app.use('/home/', todoRouter);


app.listen(5000, function(){
    console.log("Server is running at port: "+port);
})