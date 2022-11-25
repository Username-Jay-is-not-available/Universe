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

// load the Data.json file
let jsonData = require('./Data.json');
var Data = require('./Data.json');
let bookData = require('./bookData.json');


// Create the dictionary for search
const Dict = new Object();
for (data of jsonData) {
    Dict[data.noun + " " + data.book] = data
};

const bookDict = new Object();
for (data2 of bookData) {
    bookDict[data2.name] = data2
};


app.get('/', (req, res) => {
    if(Data) {
      res.status(200).render('noun', { 
      RenderShit: true,
      RenderCrap: false,
      RenderLink: false,
      Data: Dict["Welcome to Universe "]
    }) 
    } 

    if(bookData){
        res.status(200).render('noun', { 
        RenderShit: true,
        RenderCrap: false,
        RenderLink: false,
        Data: Dict["Welcome to Universe "]
    })
    }

});

// search function
app.get('/search', (req, res) => {

    // decode URL
    const decoded_q = decodeURIComponent(req.query.q)

    // check if the keyword is in Dict
    if (decoded_q in Dict) {
        encoded_q = encodeURI(decoded_q)
        res.redirect('/' + encoded_q)  // redirect it to the result page

    } 

    else if(decoded_q in bookDict){
        encoded_q = encodeURI(decoded_q)
        res.redirect('/' + encoded_q)
    }
    
    else {
        res.sendStatus(404)  // return 404 if not found
    }

})

app.get('/:noun', (req, res) => {
    // decode URL
    const decoded_noun = decodeURIComponent(req.params.noun)

    // check if the keyword is in Dict
    if (decoded_noun in Dict) {
        res.status(200).render('noun', {
            RenderShit: true, 
            RenderCrap: false,
            RenderLink: true,
            Data: Dict[decoded_noun]

        })
    } 
    else if(decoded_noun in bookDict) {
        res.status(200).render('noun', {
            RenderShit: false, 
            RenderCrap: true,
            RenderLink: false,
            bookData: bookDict[decoded_noun]
        })

    }
    else {
        res.status(404).render('noun', {
            RenderCrap: false,
            RenderLink: false,
            RenderShit: false
        })  // return 404 if not found
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})