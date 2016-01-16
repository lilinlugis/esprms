var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
	  	'title':'esprms-blog',
		'header':'<link rel="stylesheet" href="/css/home.min.css">' 
	});
});

module.exports = router;
