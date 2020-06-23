/** @format */
$(function () {
	//code only to run once html is loaded
	//initial array of city buttons
	//listen for clicks on search button
	//then we read value of input element
	//aler the value

	$("#search-button").on("click", function (event) {
		event.preventDefault();
		var apiKey = "cb2ced122314e011f2e654fe37600669";
		var city = $("#city-input").val();

		var queryURL =
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
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
			//info.text("Temperature: " + response.main.temp + " Fahrenheit");
			$("#info-container").append(info);
			//dump 5-day forecast

			var forecastEl = $("#forecast");
			var forecastDays = [];
			forecastDays.push(response.list[0]); //go until 32
			forecastDays.push(response.list[8]);
			forecastDays.push(response.list[16]);
			forecastDays.push(response.list[24]);
			forecastDays.push(response.list[32]);
			//forecastEl.html(
			//	"<pre>" + JSON.stringify(forecastDays, null, 2) + "</pre>");
			//null adds a function to not modifyand the 2 expresses the indentation
		
			//create forecast-day div
			for (var i=0; i< forecastDays.length; i ++) {
				console.log(forecastDays[i]);
			var forecastContainer = $("<div>").addClass("forecast-day");
			//create elements for date, icon, temp, and humidity
			var dateEl = $("<div>").text("date");
			//replace date with forecastDays[i].dt or with moment
			//prob need to create an image
			var iconEl = $("<div>").text("icon" + forecastDays[i].weather[0].icon);
			var tempEl =$("<div>").text("temp" + forecastDays[i].main.temp + "degrees farenheight");
			var humidityEl = $("<div>").text("humididty info");
			//add data element to forecast-day div
			forecastContainer.append(dateEl, iconEl, tempEl, humidityEl);
			//append forecast-day div to forecast
			$("#forecast").append(forecastContainer);
			}
		
		});
	});

	function handleSearch(event) {
		//	event.preventDefault();
		//	var city = $("#city-input").val();
	}
});

//get reference to element for showing the data
//use .text or .html w JQ to render the data
