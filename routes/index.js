// var express = require('express');
// var router = express.Router();
// var User = require('../model/user');
// var Status = require('../model/user');

// // get home page
// router.get('/', function(_req, res, _next) {
//     res.render('index', { title: 'Express'});
// });

// router.post('/login', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;

//     User.findOne({username: username, password: password}, function(err, user) {
//         if(err) {
//             console.log(err);
//             return res.status(500).send();
//         }

//         if(!user) {
//             return res.status(404).send();
//         }

//         return res.status(200).send();
//     })
// });

// router.post('/register', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     var email = req.body.email;
//     var phonenumber = req.body.phonenumber;
//     var address = req.body.address;
//     var address2 = req.body.address2;
//     var city = req.body.city;
//     var state = req.body.state;
//     var zip = req.body.zip;
//     var additional = req.body.additional;

//     var newuser = new User();
//     newuser.username = username;
//     newuser.password = password;
//     newuser.firstname = firstname;
//     newuser.lastname = lastname;
//     newuser.email = email;
//     newuser.phonenumber = phonenumber;
//     newuser.address = address;
//     newuser.address2 = address2;
//     newuser.city = city;
//     newuser.state = state;
//     newuser.zip = zip;
//     newuser.additional = additional;
//     newuser.save(function(err, _savedUser) {
//         if(err) {
//             console.log(err);
//             return res.status(500).send();
//         }

//     })
// })

// module.exports = router;

var express = require("express");
var router = express.Router();
var auth = require("../controllers/AuthController.js");
console.log("auth", auth);

// restrict index for logged in user only
router.get("/", auth.home);

// route to register page
router.get("/register", auth.register);

// route for register action
router.post("/register", auth.doRegister);

// route to login page
router.get("/login", auth.login);

// route for login action
router.post("/api/login", auth.doLogin);

// route for logout action
router.get("/logout", auth.logout);

module.exports = router;
