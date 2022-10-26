var express = require('express');
const SendNotification = require('../lib/SendNotification');
var router = express.Router();

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