const express = require('express');
const ejs = require('ejs');
const doaas = require('./public/json/doaas.json');

const app = express();
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/:ref',function(req,res){
  res.render('cards', {cards : doaas, reference : req.params.ref});
});

app.get('/quran/:doaa',function(req,res){
  res.render('card', {cards : doaas, card : req.params.doaa});
});

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
