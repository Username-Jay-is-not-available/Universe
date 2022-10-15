/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Jaaron Green
 * Email: greenjaa@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var kekData = require('./kekData.json');
const { nextTick } = require('process');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: null}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));


app.get('/', function (req, res) { //might have to do :author or something for singele twit
  if(kekData) {
    res.status(200).render('index', { //Might have to change index to kek
      kekData,
      RenderShit: true
    }) 
  }

})

app.get('/:noun', function (req, res, next) {

    //Edit to get the name of the search instead of the index number

  var musk = req.params.noun
  //TheShit = KekData[musk]
  console.log("====Shit: ", TheShit)

  if(TheShit) {
    res.status(200).render('index', {
      RenderShit: true,
      //SingleTwit: true,
      kekData: [kekData[musk]]
    })
  }
  
  else{
    next()
  }

})


app.get('*', function (req, res) {
  res.status(404).render('index', {
    RenderShit: false
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
