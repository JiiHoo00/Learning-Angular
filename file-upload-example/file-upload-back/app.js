var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(function(req, res, next) {
  // These are defined for testing only and you should have your backend already configured correctly
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
/** Serving from the same express Server
No cors required */
var storage = multer.diskStorage({
  // multers disk storage settings
  // defining the destination folder relative to this file
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  // defines the filename for that the file is saved with on the server
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        '-' +
        datetimestamp +
        '.' +
        file.originalname.split('.')[file.originalname.split('.').length - 1]
    );
  },
});
var upload = multer({
  //multer settings
  storage: storage,
}).single('file');
/** API path that will upload the files
    change path to your own needs
*/
app.post('/upload', function(req, res) {
  console.log('came to /upload');
  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      console.log('upload error');
      return;
    }
    console.log('upload OKAY');
    res.json({ error_code: 0, err_desc: null });
  });
});
app.listen('3000', function() {
  console.log('running on 3000...');
});
