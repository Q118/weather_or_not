/** @format */

//initial array of city buttons
var cities = [];


var apiKey = "cb2ced122314e011f2e654fe37600669";
var queryURL =
	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=" + apiKey;

$("#search-button").on("click", function (event) {
    event.preventDefault();
    

    var userCity = $("#city-input").val();
    console.log(userCity);

});


