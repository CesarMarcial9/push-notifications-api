var express = require('express');
var router = express.Router();
const SendNotification = require('../lib/SendNotification');

/* GET the app status */
router.get('/', async function(req, res, next) {
  res.json({status: "online"});
});

/* POST an insight to homepage */
router.post('/', async function(req, res, next) {
  
  const response = await SendNotification(req.body)

  res.json(response);
});

module.exports = router;