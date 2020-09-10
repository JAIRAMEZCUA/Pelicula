/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/

function wsearch() {

    var term = document.getElementById("searchterm").value;

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        list: "search",
        srsearch: term,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    fetch(url)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (response) {
            console.log(response.query.search);
            if (response.query.search[0].title === term) {
                console.log("Your search page " + term + " exists on English Wikipedia");
            }
        })
        .catch(function (error) { console.log(error); });


}

