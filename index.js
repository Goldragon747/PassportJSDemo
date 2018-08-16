const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const ejs = require('ejs');

const keys = require("./keys");
const express = require("express");
const path = require("path");
const app = express();

const User = require("./user-model");

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieSession({
    //hours minutes seconds miliseconds = 1 day
    maxAge:24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname });
});
app.get('/logged-in', (req,res) => {

});
app.listen(3000);


passport.use(
    new GoogleStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL:''
    },() => {
        // Callback function
        
    })
)

