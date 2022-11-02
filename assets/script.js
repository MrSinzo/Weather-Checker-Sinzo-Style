/*Needs to reach MVP
1. need date to be in 5 day format, not 3 hour 
2. need seached cities to have clickable button showing localStorage data
3. need icons to get displayed
4. need to show all searched cities ( maybe up to ten? and may need for-loop?)
5. 
6.
7.
8.
9.
10.
*/
// API

//need event button listener on search click ( or form submit?)

//Hooks
var todayWeatherEl = document.getElementById("todayWeather");
var forecastEl = document.querySelector("#forecastBox");
var goBtn = document.querySelector(".searchBtn");
var queryHistoryEl = document.querySelector(".searchHistory");
var selectHistoryEl = document.querySelector(".openLastQuery");

goBtn.addEventListener("click", function getApi() {
  var userSearch = document.querySelector(".queryInput").value;
  var requestUrl =
    `https:api.openweathermap.org/data/2.5/forecast?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&cnt=6&q=` +
    userSearch;
  //main code to incorperate ^^^ // Main API code line works!!!!!
  fetch(requestUrl)
    .then(function (response) {
      // console.log(response) // we are getting a response
      return response.json();
    })
    .then(function (data) {
      // console.log(data); // we are getting Data
      // console.log(data.list[0].main.humidity + "%"); //sample pathway for aquiring specific data (humidity in this case)
      // console.log(data.list[0].wind.speed + " Mph");
      // console.log(data.list[0].main.temp + " Degrees");
      var todayForecast = document.createElement("ul");
      todayForecast.classList.add("test");
      todayForecast.setAttribute("style", "color:white;");
      todayWeatherEl.appendChild(todayForecast);
      //city name
      var todayName = document.createElement("h5");
      todayName.textContent = data.city.name;
      todayForecast.appendChild(todayName);
      //date
      var todayDate = document.createElement("h5");
      todayDate.textContent = data.list[0].dt_txt;
      todayForecast.appendChild(todayDate);
      //icon
      var todayIcon = document.createElement("li");
      todayIcon.textContent =
        data.list[0].weather.icon + " :Icon should be here";
      todayForecast.appendChild(todayIcon);
      //humidity
      var todayHumidity = document.createElement("li");
      todayHumidity.textContent =
        "Humidity: " + data.list[0].main.humidity + "%";
      todayForecast.appendChild(todayHumidity);
      //temp
      var todayTemp = document.createElement("li");
      todayTemp.textContent =
        "Temperature: " + data.list[0].main.temp + " Degrees";
      todayForecast.appendChild(todayTemp);
      //wind speed
      var todayWind = document.createElement("li");
      todayWind.textContent = "Wind Speed: " + data.list[0].wind.speed + " Mph";
      todayForecast.appendChild(todayWind);

      for (var i = 1; i < data.list.length; i++) {
        var showData = document.createElement("ul");
        showData.classList.add("test");
        showData.setAttribute("style", "color:white;");
        forecastEl.appendChild(showData);
        //date
        var todayDate = document.createElement("h6");
        todayDate.textContent = data.list[i].dt_txt;
        showData.appendChild(todayDate);
        //icon
        var todayIcon = document.createElement("li");
        todayIcon.textContent =
          data.list[i].weather.icon + " Icon should be here";
        showData.appendChild(todayIcon);
        console.log(todayIcon.img); // console.logging nothing/ undefined
        //humidity
        var humidityForecast = document.createElement("li");
        humidityForecast.textContent =
          "Humidity: " + data.list[i].main.humidity + "%";
        showData.appendChild(humidityForecast);
        //temp
        var tempForecast = document.createElement("li");
        tempForecast.textContent =
          "Temp: " + data.list[i].main.temp + " Degrees";
        showData.appendChild(tempForecast);
        //wind speed
        var windForecast = document.createElement("li");
        windForecast.textContent =
          "Wind Speed: " + data.list[i].wind.speed + " MPH";
        showData.appendChild(windForecast);
      }
    });
});

selectHistoryEl.addEventListener("click", function getApi() {
  // var userSearch = document.querySelector(".queryInput").value;
  let pulledCity = JSON.parse(localStorage.getItem("storedCity")); // this should be storing the value (e.G. pulledCity = CityName)
  console.log(pulledCity) // this is logging {userSearch: 'Juno'}
  var requestUrl =
    `https:api.openweathermap.org/data/2.5/forecast?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&cnt=6&q=`+
    pulledCity.userSearch; //added userSearch to the end here and it will function *correctly*
    console.log(requestUrl)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var todayForecast = document.createElement("ul");
      todayForecast.classList.add("test");
      todayForecast.setAttribute("style", "color:white;");
      todayWeatherEl.appendChild(todayForecast);
      //city name
      var todayName = document.createElement("h5");
      todayName.textContent = data.city.name;
      todayForecast.appendChild(todayName);
      //date 1. need date to be in 5 day format, not 3 hour 
      var todayDate = document.createElement("h5");
      todayDate.textContent = data.list[0].dt_txt;
      todayForecast.appendChild(todayDate);
      //icon 3. need icons to get displayed
      var todayIcon = document.createElement("li");
      todayIcon.textContent =
        data.list[0].weather.icon + " :Icon should be here";
      todayForecast.appendChild(todayIcon);
      //humidity
      var todayHumidity = document.createElement("li");
      todayHumidity.textContent =
        "Humidity: " + data.list[0].main.humidity + "%";
      todayForecast.appendChild(todayHumidity);
      //temp
      var todayTemp = document.createElement("li");
      todayTemp.textContent =
        "Temperature: " + data.list[0].main.temp + " Degrees";
      todayForecast.appendChild(todayTemp);
      //wind speed
      var todayWind = document.createElement("li");
      todayWind.textContent = "Wind Speed: " + data.list[0].wind.speed + " Mph";
      todayForecast.appendChild(todayWind);

      for (var i = 1; i < data.list.length; i++) {
        var showData = document.createElement("ul");
        showData.classList.add("test");
        showData.setAttribute("style", "color:white;");
        forecastEl.appendChild(showData);
        //date
        var todayDate = document.createElement("h6");
        todayDate.textContent = data.list[i].dt_txt;
        showData.appendChild(todayDate);
        //icon 3. need icons to get displayed
        var todayIcon = document.createElement("li");
        todayIcon.textContent =
          data.list[i].weather.icon + " Icon should be here";
        showData.appendChild(todayIcon);
        console.log(todayIcon.img); // console.logging nothing/ undefined
        //humidity
        var humidityForecast = document.createElement("li");
        humidityForecast.textContent =
          "Humidity: " + data.list[i].main.humidity + "%";
        showData.appendChild(humidityForecast);
        //temp
        var tempForecast = document.createElement("li");
        tempForecast.textContent =
          "Temp: " + data.list[i].main.temp + " Degrees";
        showData.appendChild(tempForecast);
        //wind speed
        var windForecast = document.createElement("li");
        windForecast.textContent =
          "Wind Speed: " + data.list[i].wind.speed + " MPH";
        showData.appendChild(windForecast);
      }
    });
});

goBtn.addEventListener("click", function storeClick(event) {
  event.preventDefault();
  storeQuery();
  function storeQuery() {
    // for (i = 0; i < 8; i++) {}
      var storedCity = {
        userSearch: document.querySelector(".queryInput").value.trim(),
      };
      localStorage.setItem("storedCity", JSON.stringify(storedCity));
      console.log(storedCity);
  }
});

// 2. need seached cities to have clickable button showing localStorage data
// 4. need to show all searched cities ( maybe up to ten? and may need for-loop?)
function showLastQuery() {
  var pulledCity = JSON.parse(localStorage.getItem("storedCity"));
  if (pulledCity !== null) {
    document.querySelector(".searchHistory").innerHTML = pulledCity.userSearch;
  }
}
function init() {
  showLastQuery();
}
init();
/**************************************
 * held out code for "just in case" needs




//Geocoding api may not be needed
/*goBtn.addEventListener("click", function() {
  // var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?appid=9ecdb8aa9746c79a02aea67b96d3c5a2&limit=1&q=london"
  //test code ^^^
  var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?appid=9ecdb8aa9746c79a02aea67b96d3c5a2&limit=1&q="+userSearch;
  //main code to be used? ^^^
  fetch(cityUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
    })
    getApi()
});*/
