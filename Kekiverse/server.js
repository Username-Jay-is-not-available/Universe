/*
 * Name: Jaaron Green
 * Email: greenjaa@oregonstate.edu
 */

const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.static('public'));
app.use(cors());

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: null }));
app.set('view engine', 'handlebars');

const port = 3000

// load the kekData.json file
let jsonData = require('./kekData.json');
var kekData = require('./kekData.json');


// Create the dictionary for search
const kekDict = new Object();
for (data of jsonData) {
    kekDict[data.noun] = data
};


app.get('/', (req, res) => {
  if(kekData) {
    res.status(200).render('kekiverse', { 
      RenderShit: true,
      kekData: [kekData[0]] 
    }) 
  }
});

// search function
app.get('/search', (req, res) => {

    // decode URL
    const decoded_q = decodeURIComponent(req.query.q)

    // check if the keyword is in kekDict
    if (decoded_q in kekDict) {
        encoded_q = encodeURI(decoded_q)
        res.redirect('/' + encoded_q)  // redirect it to the result page

    } else {
        res.sendStatus(404)  // return 404 if not found
    }

})

app.get('/:noun', (req, res) => {
    // decode URL
    const decoded_noun = decodeURIComponent(req.params.noun)

    // check if the keyword is in kekDict
    if (decoded_noun in kekDict) {
        res.status(200).render('noun', {
            RenderShit: true,
            kekData: kekDict[decoded_noun]

        })
    } else {
        res.status(404).render('noun', {
            RenderShit: false
        })  // return 404 if not found
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})