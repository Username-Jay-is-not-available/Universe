function sendText() {
    // Get the value of the text in search bar

    let searchInput = document.getElementById("navbar-search-input").value;

    let dict = {
        "query": searchInput
    }

    // Setup AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/search/?q=" + searchInput, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    // Tell AJAX request how to resolve 

    xhttp.onreadystatechange = () => {
        if (xhttp.status == 200) {

            window.location.assign(xhttp.responseURL);
        }
        else if (xhttp.status == 404) {
            window.location.assign("http://localhost:3000/%22*%22");
            console.log("No matching record found")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(dict));

}