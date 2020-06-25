/** @format */
$(function () {
	//code only to run once html is loaded
	//listen for clicks on search button
	//then we read value of input element

	$(document).ready(function () {
		init();
	});

	var cities = [];
	//console.log(cities);

	function init() {
		//get stored todos from localStorage
		//parsing the JSON string to an object
		var storedCities = JSON.parse(localStorage.getItem("forecastDays"));
		if (storedCities !== null) {
			cities = storedCities;
		}
		//renders cities to the DOM
		renderInfo();
	}

	//event handling on city buttons
	$("#button-container").on("click", ".m-3", function (event) {
		event.preventDefault();
		var apiKey = "833100609a87c9e8f833ff46575821a1";
		var city = this.textContent;

		var queryURL =
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
			city +
			"&units=imperial" +
			"&appid=" +
			apiKey;

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			var info = $("<h2>");
			//info.text("Temperature: " + response.main.temp + " Fahrenheit");
			$("#info-container").append(info);
			//dump 5-day forecast

			var forecastEl = $("#forecast");
			var forecastDays = [];
			//display one day at a time
			forecastDays.push(response.list[0]);
			forecastDays.push(response.list[8]);
			forecastDays.push(response.list[16]);
			forecastDays.push(response.list[24]);
			forecastDays.push(response.list[32]);

			//save array to local storage
			localStorage.setItem("forecastDays", JSON.stringify(forecastDays));
			//put title in capitals
			forecastEl.addClass("capitalize");

			//create forecast-day div
			for (var i = 0; i < forecastDays.length; i++) {
				var forecastContainer = $("<div>").addClass("forecast-day");

				//create elements for date, icon, temp, and humidity
				var dateEl = $("<div>").html(forecastDays[i].dt_txt);
				//var imageEl= $("<img>").src(forecastDays[i].symbol)
				//prob need to create an image
				var iconEl = $("<img>").attr(
					"src",
					"http://openweathermap.org/img/wn/" +
						forecastDays[i].weather[0].icon +
						"@2x.png"
				);
				var tempEl = $("<div>").html(
					"Temp: " + forecastDays[i].main.temp + "°F"
				);
				var humidityEl = $("<div>").html(
					"Humidity: " + forecastDays[i].main.humidity + "%"
				);
				//add data element to forecast-day div

				forecastContainer.append(dateEl, iconEl, tempEl, humidityEl);
				//append forecast-day div to forecast
				$("#forecast").append(forecastContainer);
			}
			//placing title at the top
			var cityTitle = $("<h2>").html(city + "'s 5 Day forecast:");
			$("#forecast").prepend(cityTitle);

			//data dump for todays city info
			var currentName = $("<ul>").html(
				"<h2>" + "Right now in " + city + ":" + "</h2>"
			);

			var currentTemp = $("<li>").text(
				"Temperature: " + forecastDays[0].main.temp + "°F"
			);

			var currentHumidity = $("<li>").text(
				"Humidity: " + forecastDays[0].main.humidity + "%"
			);
			var currentWind = $("<li>").text(
				"Wind: " + forecastDays[0].wind.speed + "mph"
			);

			var uvIndex = $("<li>").text("UV Index: " + forecastDays[0].wind.deg);

			//capitalize the title and center the info, append to body
			currentName.addClass("capitalize text-center");
			currentTemp.addClass("text-center info-container");
			currentHumidity.addClass("text-center info-container");
			currentWind.addClass("text-center info-container");
			uvIndex.addClass("text-center info-container");
			$("#info-container").append(
				currentName,
				currentTemp,
				currentHumidity,
				currentWind,
				uvIndex
			);
		});
		//clears previous info to display only the most recently searched or button clicked
		$("#info-container").empty();
		$("#forecast").empty();
	});

	$("#search-button").on("click", function (event) {
		event.preventDefault();
		var a = $("<button>");
		var city = $("#city-input").val();
		a.text(city);
		a.addClass("m-3");
		
		$("#button-container").append(a);

		renderInfo();
	});

	function renderInfo() {
		var apiKey = "833100609a87c9e8f833ff46575821a1";
		var city = $("#city-input").val();

		var queryURL =
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
			city +
			"&units=imperial" +
			"&appid=" +
			apiKey;

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			var info = $("<h2>");
			//info.text("Temperature: " + response.main.temp + " Fahrenheit");
			$("#info-container").append(info);
			//dump 5-day forecast

			var forecastEl = $("#forecast");
			var forecastDays = [];
			//display one day at a time
			forecastDays.push(response.list[0]);
			forecastDays.push(response.list[8]);
			forecastDays.push(response.list[16]);
			forecastDays.push(response.list[24]);
			forecastDays.push(response.list[32]);

			//save array to local storage
			localStorage.setItem("forecastDays", JSON.stringify(forecastDays));
			//put title in capitals
			forecastEl.addClass("capitalize");

			//create forecast-day div
			for (var i = 0; i < forecastDays.length; i++) {
				var forecastContainer = $("<div>").addClass("forecast-day");

				//create elements for date, icon, temp, and humidity
				var dateEl = $("<div>").html(forecastDays[i].dt_txt);
				//var imageEl= $("<img>").src(forecastDays[i].symbol)
				//prob need to create an image
				var iconEl = $("<img>").attr(
					"src",
					"http://openweathermap.org/img/wn/" +
						forecastDays[i].weather[0].icon +
						"@2x.png"
				);
				var tempEl = $("<div>").html(
					"Temp: " + forecastDays[i].main.temp + "°F"
				);
				var humidityEl = $("<div>").html(
					"Humidity: " + forecastDays[i].main.humidity + "%"
				);
				//add data element to forecast-day div

				forecastContainer.append(dateEl, iconEl, tempEl, humidityEl);
				//append forecast-day div to forecast
				$("#forecast").append(forecastContainer);
			}
			//placing title at the top
			var cityTitle = $("<h2>").html(city + "'s 5 Day forecast:");
			$("#forecast").prepend(cityTitle);

			//data dump for todays city info
			var currentName = $("<ul>").html(
				"<h2>" + "Right now in " + city + ":" + "</h2>"
			);

			var currentTemp = $("<li>").text(
				"Temperature: " + forecastDays[0].main.temp + "°F"
			);

			var currentHumidity = $("<li>").text(
				"Humidity: " + forecastDays[0].main.humidity + "%"
			);
			var currentWind = $("<li>").text(
				"Wind: " + forecastDays[0].wind.speed + "mph"
			);

			var uvIndex = $("<li>").text("UV Index: " + forecastDays[0].wind.deg);

			

			//capitalize the title and center the info, append to body
			currentName.addClass("capitalize text-center");
			currentTemp.addClass("text-center info-container");
			currentHumidity.addClass("text-center info-container");
			currentWind.addClass("text-center info-container");
			uvIndex.addClass("text-center info-container");
			$("#info-container").append(
				currentName,
				currentTemp,
				currentHumidity,
				currentWind,
				uvIndex
			);
		});
		//clears previous info to display only the most recently searched or button clicked
		$("#info-container").empty();
		$("#forecast").empty();
	}
});
