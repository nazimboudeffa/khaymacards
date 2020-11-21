const express = require('express');
const ejs = require('ejs');
const quran = require('./doaa.json');

const app = express();
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/:doaa',function(req,res){
  if (req.params.doaa == "quran"){
    res.render('doaa');
    console.log(quran);
  }
});

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
