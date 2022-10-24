var express = require('express');
const SendNotification = require('../lib/SendNotification');
var router = express.Router();

/* GET home page. */
router.post('/', async function(req, res, next) {
  
  const response = await SendNotification(req.body)

  res.json(response);
});

module.exports = router;
