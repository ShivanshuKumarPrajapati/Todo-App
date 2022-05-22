const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const todoSchema = require('./Schema');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true
    },
    password: String,
    list: [todoSchema]
});


UserSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', UserSchema);

module.exports = User;


