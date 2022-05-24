require('dotenv').config();
const express = require('express');
const Router = require('express').Router();
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt')

const User = require("./../todoSchema/UserSchema");

Router.route('/').get((req, res) => {
    if (req.isAuthenticated()) {
        res.json(1);
    }
    else {
        res.json(0)
    }

})


// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

Router.route("/signUp").post((req, res) => {
    User.register(new User({
        username: req.body.username,
    }),
        req.body.password,
        function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.status(200).json({
                    id: user._id,
                    username:user.username

                });
            });
        }
        }
    );
});

Router.route("/login").post((req, res) => {
    const user = new User({
        username: req.body.username,
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
    res.status(200).json('User logout successsfully');
});

module.exports = Router