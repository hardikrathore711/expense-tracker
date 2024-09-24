var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/create', (req, res) => {
  res.render("createexpense", {title: "Expense Tracker | Create Expense"});
});

router.get('/show', (req,res)=>{
  res.render("showexpense", {title: "Expense Tracker | Show Expense"});
});


module.exports = router;
