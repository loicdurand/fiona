const // 
  express = require('express'),
  router = express.Router(),
  config = require('../entities/Config');

router.get('/', function (req, res, next) {
  // req.db.managers.findOne({
  //   email: req.body.email
  // }, (err, doc) => { ...
  // })
  res.render('index', config);
});

module.exports = router;