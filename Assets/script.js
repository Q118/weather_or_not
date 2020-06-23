/** @format */
$(function () {
	//initial array of city buttons
	//var cities = [];
	//userCity = $();

	$("#search-button").on("click", function (event) {
		event.preventDefault();
		var apiKey = "cb2ced122314e011f2e654fe37600669";
		var city = $("#city-input").val();
		console.log(city);

		var queryURL =
			"https://api.openweathermap.org/data/2.5/weather?q=" +
			city +
			"&units=imperial" +
			"&appid=" +
			apiKey;
  
		var a = $("<button>");
		a.text(city);
		$("#button-container").append(a);

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log(response.name);
			var info = $("<h2>");
			info.text("Temperature: " + response.main.temp + " Fahrenheit");
            $("#info-container").append(info);
            //dump 5-day forecast
            $("#forecast").html(JSON.stringify(response));
		});
	});
});
