require('dotenv').config();
const express = require('express');
const Router = require('express').Router();
const passport = require('passport');

// import User from './../todoSchema/UserSchema'

Router.route('/').get((req, res) => {
    console.log('heeelo');
})


// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = Router