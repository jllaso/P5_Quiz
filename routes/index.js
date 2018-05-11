var express = require('express');
var router = express.Router();

const {models} = require('../models/index.js');
const Sequelize = require('sequelize');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

/* GET home page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Quiz', name: 'José Luis Laso Fernández'});
});

router.get('/quizzes', function(req, res, next) {
	models.quiz.findAll()
	.then(quizzes => {
		res.render('quizzes', {quizzes : quizzes})
	});
});

/*router.get('quizzes', function(req, res, next)){

}*/

module.exports = router;
