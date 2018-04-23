//require express

var express = require('express');

//require user model
var User = require('model/user.js');


//create router object

router = express.Router();

//export router

module.exports = router;

//route for landing page
router.get('/', function (req, res, next)
{
   res.render('index');
});

router.post("/", (req, res) => {
   var new_user = new User(
      {
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         phone_number: req.body.phone_number,
         message: req.message
      });
   new_user.save()
         .then(item => {
            req.flash("info", "Message sent");
            return res.render('index');
         })
         .catch(err => {
            res.status(400).render('index');
         });
});