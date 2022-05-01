require('dotenv').config();
const express = require('express');
const Router = require('express').Router();
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

const User = require("./../todoSchema/UserSchema");

Router.route('/').get((req, res) => {
    if (req.isAuthenticated()) {
    res.json(1);
    }
    else
        res.json()
})


// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

Router.route("/signUp").post((req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    User.register({
        email: req.body.email,
    },
        req.body.password,
        function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.json(1);
            });
        }
        }
    );
});

Router.route("/login").post((req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    req.login(user, function (err) {
        if (err) res.status(400).json("Error:" + err);
        else {
        passport.authenticate("local")(req, res, function () {
            res.json(1);
        });
        }
    });
});

Router.route("/logout").get((req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = Router