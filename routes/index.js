var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add get() route for actors id to accept the id as a parameter
router.get('/actors/:id', function(req, res, next) {
  models.actor
    .findOne({
      include: [{ model: models.film }],
      where: { actor_id: parseInt(req.params.id) }
    })
    .then(actorsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(actorsFound));
    })
});

module.exports = router;
