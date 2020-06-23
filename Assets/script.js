/** @format */

//initial array of city buttons
var cities = [];
userCity = $();
var apiKey = "cb2ced122314e011f2e654fe37600669";

$("#search-button").on("click", function (event) {
	event.preventDefault();

	var city = $("#city-input").val();
	console.log(city);

	var queryURL =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&appid=" +
        apiKey;
        
        var a = $("<button>");
        a.text(city);
        $("#button-container").append(a);
});


//function renderButtons() {};
  