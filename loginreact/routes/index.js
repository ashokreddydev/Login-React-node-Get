var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data', function(req, res, next) {
 var list={
"Name":"Ashok Reddy",
"Lname":"Penamalli"
 }

 res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

 res.json(list)
});

module.exports = router;
