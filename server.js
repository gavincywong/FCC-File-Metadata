require('dotenv').config()
var express = require('express');
var cors = require('cors');
var app = express();
var multer = require('multer')
var upload = multer({dest: './uploads/'})
var port = process.env.PORT || 3000;

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/fileanalyse', upload.array('upfile', 1), function(req, res) {
  console.log(req.files[0])
  res.json({
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size
  })
})

app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
