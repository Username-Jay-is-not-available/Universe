/*
 * Name: Jaaron Green
 * Email: greenjaa@oregonstate.edu
 */


//NOTES:
//Might have to change 'index' to kekiverse

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


//Add function that retrieves text from the search bar on click 




//DOES NOT WORK. SEE WHAT TO DO

 //Gets search bar information
 var SB = document.querySelector('#navbar-search-button') //Document does not work. Need separate file?
 var search = document.getElementById('navbar-search-input').value
 
 
 
 //Change this function to assign a number to the search bar
 SB.addEventListener('click', function (event) {

  var SBTEXT = document.getElementById('navbar-search-input').value
  search = SBTEXT

})

app.get('/', function (req, res) { 
  if(kekData) {
    res.status(200).render('kekiverse', { 
      RenderShit: true,
      kekData: [kekData[0]] //This is the home page
    }) 
  }

})

app.get('/:noun', function (req, res, next) { //0 is default

    //Edit to get the name of the search instead of the index number

  var musk = req.params.noun
  //TheShit = KekData[musk]
  console.log("====Shit: ", TheShit)

  if(TheShit) {
    res.status(200).render('kekiverse', {
      RenderShit: true,
      kekData: [kekData[musk]]
    })
  }
  
  else{
    next()
  }

})


app.get('*', function (req, res) {
  res.status(404).render('kekiverse', {
    RenderShit: false
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
