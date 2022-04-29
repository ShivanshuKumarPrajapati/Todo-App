const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const todoSchema = require('./Schema');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    list: [todoSchema]
});

UserSchema.plugin(passportLocalMongoose);


User = mongoose.model('User', UserSchema);

module.exports = User;


