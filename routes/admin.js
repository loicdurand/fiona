const // 
  express = require('express'),
  router = express.Router(),
  config = require('../entities/AdminConfig');

router.get('/modify/:name', function (req, res, next) {
  let name = req.params.name;
  res.render('admin', config);
});

router.post('/submit', function (req, res, next) {
  let params = req.body;
  console.log(params);
  //res.render('admin', config);
});

module.exports = router;
