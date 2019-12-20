function searchGiantBomb() 
{
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://www.giantbomb.com/api/game/3030-4725/?api_key=47d31e69d2c3471c673aed689950a59ff74401d4";
    var url2 = "http://www.giantbomb.com/api/search/?api_key=47d31e69d2c3471c673aed689950a59ff74401d4&format=json&limit=1&query='metroid prime'&resources=game";
    
    var searchurl = "http://www.giantbomb.com/api/search/?api_key=47d31e69d2c3471c673aed689950a59ff74401d4&format=json&limit=1&query='" + document.getElementById("searchbar").value + "'&resources=game";
    fetch(proxyurl + searchurl).then(function (response) 
    {
        return response.json();
        
    }).then(function (json)
    {
        console.log(json);
        for (i in json.results) {
            document.getElementById("title").innerHTML = json.results[i].name;
            document.getElementById("searchedgame").src = json.results[i].image.thumb_url;
            document.getElementById("description").innerHTML = json.results[i].deck;
            document.getElementById("checkoutbutton").style.display = "block";
            localStorage.setItem("gameTitle", json.results[i].name);
            localStorage.setItem("gameImage", json.results[i].image.thumb_url);
        }
    });
}

function checkOutGame()
{
    window.location = "GiantBombCheckout.html";
}

function displayCheckOut()
{
    document.getElementById("title").innerHTML = localStorage.getItem("gameTitle");
    document.getElementById("searchedgame").src = localStorage.getItem("gameImage");
}