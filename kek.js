/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Jaaron Green
 * Email: greenjaa@oregonstate.edu
 */

 //SOURCES:
 //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement



 //Checks to see if create button is clicked. If so, perform the click function
 //The click function makes all the hidden classes display inline rather than none
 var CreateTwit = document.querySelector('#create-twit-button')
 
 CreateTwit.addEventListener('click', function (event) {

    var TheHidden = document.querySelectorAll('.hidden')

    for(var i = 0; i < TheHidden.length; i++) {

        TheHidden[i].style.display = "inline"

    }
 })
 
 //Checks to see if X if clicked. If so, then the hidden becomes hidden again
 var TopCloseButton = document.querySelector('.modal-close-button')

 TopCloseButton.addEventListener('click', function (event) {

    var TheText = document.querySelector('#twit-text-input')
    TheText.value = ""

    var TheOther = document.querySelector('#twit-attribution-input')
    TheOther.value = ""

    var TheHidden = document.querySelectorAll('.hidden')

    for(var i = 0; i < TheHidden.length; i++) {

        TheHidden[i].style.display = "none"

    }
    
 })

 //Checks to see if cancel is clicked, then the hidden becomes hidden again
 var BottomCloseButton = document.querySelector('.modal-cancel-button')

 BottomCloseButton.addEventListener('click', function (event) {

    var TheText = document.querySelector('#twit-text-input')
    TheText.value = ""

    var TheOther = document.querySelector('#twit-attribution-input')
    TheOther.value = ""

    var TheHidden = document.querySelectorAll('.hidden')
    
    for(var i = 0; i < TheHidden.length; i++) {

        TheHidden[i].style.display = "none"

    }

 })




/*

 //UNUSED
 //Stores text entered into an array
 var wordsInput = document.getElementById('twit-text-input')
 wordsInput.addEventListener('change', function (event) {

    var text = document.querySelector('#twit-text-input').value
    allWords = text

 })

 //Stores text entered into an array for author. UNUSED
 var authorInput = document.getElementById('twit-attribution-input')
 authorInput.addEventListener('change', function (event) {

    var text = document.querySelector('#twit-attribution-input').value
    author = text

 })
 */



 //Creates new twit
 var TwitContainer = document.querySelector('.twit-container')
 var CreateTwitButton = document.querySelector('.modal-accept-button')
 CreateTwitButton.addEventListener('click', function (event) {

    
    let Elon = document.createElement("article")
    Elon.className = "twit"
    let TwitIcon = document.createElement("div")
    TwitIcon.className = "twit-icon"
    let BULL = document.createElement("i")
    BULL.className = "fa fa-bullhorn"
    let OF = document.createElement("div")
    OF.className = "twit-content"
    let TEXT = document.createElement("p")
    TEXT.className = "twit-text"
    let AUTH = document.createElement("p")
    AUTH.className = "twit-author"
    //let AUTH = document.createElement("a") 

    var TheText = document.querySelector('#twit-text-input')
    var AUTHTEXT = document.querySelector('#twit-attribution-input')

    TEXT.innerText = TheText.value
    AUTH.innerText = AUTHTEXT.value

    if((TheText.value === "") || (AUTHTEXT.value === "")){
        alert("Author or Text cannot be empty")
    }

    else{

        Elon.appendChild(TwitIcon)
        TwitIcon.appendChild(BULL)
        TwitIcon.insertAdjacentElement('afterend', OF)
        OF.appendChild(TEXT)
        TEXT.insertAdjacentElement('afterend', AUTH)
    
        TwitContainer.appendChild(Elon)
    
        var TheHidden = document.querySelectorAll('.hidden')
    
        var TheText = document.querySelector('#twit-text-input')
        TheText.value = ""
    
        var TheOther = document.querySelector('#twit-attribution-input')
        TheOther.value = ""
        
        for(var i = 0; i < TheHidden.length; i++) {
    
            TheHidden[i].style.display = "none"
    
        }
    }
    

 })


 //Searches through twits
 var SB = document.querySelector('#navbar-search-button')
 SB.addEventListener('click', function (event) {

    var SBTEXT = document.getElementById('navbar-search-input')
    var search = SBTEXT.value

    var TotalTwits = document.querySelectorAll('.twit')

    var text1 = document.querySelectorAll('.twit-text')
    var text2 = document.querySelectorAll('.twit-author')


    for(var i = 0; i < TotalTwits.length; i++) {

        if((text1[i].value.includes(search)) || (text2[i].value.includes(search))) {
            TotalTwits[i].style.display = "flex"
        }

        else{
            TotalTwits[i].style.display = "none"
        }

        if(search ===""){
            TotalTwits[i].style.display = "flex"
        }

        

    }

 })


 

 
 