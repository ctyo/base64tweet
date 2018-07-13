var express = require('express');
var multer = require('multer'); // v1.0.5

var router = express.Router();
var upload = multer();

/* GET home page. */
router.post('/', upload.array(), function(req, res, next) {
  console.dir(req.body);
  res.render('index', { title: 'Express' });
});

module.exports = router;
