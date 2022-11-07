/*Needs to reach MVP
1. DONE: (needed secondary API) need date to be in 5 day format, not 3 hour 
2. DONE: need seached cities to have clickable button using localStorage data
3. need icons to get displayed
4. Cannot complete : need to show all searched cities ( maybe up to ten? and may need for-loop?) 
  4.a. Got user search to update DOM as soon as serach button is clicked, but i would like a list of the last few cities searched
*/
//Hooks
var todayWeatherEl = document.getElementById("todayWeather");
var forecastEl = document.querySelector("#forecastBox");
var goBtn = document.querySelector(".searchBtn");
var queryHistoryEl = document.querySelector(".searchHistory");
var queryHistoryExtra = document.querySelector(".searchHistoryExtra");
var selectHistoryEl = document.querySelector(".openLastQuery");

goBtn.addEventListener("click", function getApi() {
  var userSearch = document.querySelector(".queryInput").value;
  function storeClick() {
    storeQuery();
    function storeQuery() {
      var storedCity = {
        userSearch: document.querySelector(".queryInput").value.trim(),
      };
      localStorage.setItem("storedCity", JSON.stringify(storedCity));
      console.log(storedCity);
    }
  }
  storeClick();
  showLastQuery();
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&q=" +
    userSearch;
  //main code to incorperate ^^^ // 5 Day API code line works!!!!!
  fetch(requestUrl)
  
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var todayForecast = document.createElement("ul");
      todayForecast.classList.add("test");
      todayForecast.setAttribute("style", "color:white;");
      todayWeatherEl.appendChild(todayForecast);
      //city name ********************************************************
      var cityName = document.createElement("h5");
      cityName.textContent = data.name;
      todayForecast.appendChild(cityName);
      //date ********************************************************
      var todaySlot = document.createElement("h5");
      todaySlot.innerHTML = moment.unix(data.dt).format("MMM Do, YYYY"); // leave this alone // had to add.innerHTML to make this a "node"(?)
      todayForecast.appendChild(todaySlot);
      //icon ********************************************************
      var todayIcon = document.createElement("img");
      todayIcon.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );
      todayIcon.setAttribute("style", "scale:75%;");
      // "http://openweathermap.org/img/wn/10d@2x.png" //example URL path from documentation
      todayForecast.appendChild(todayIcon);
      //humidity ********************************************************
      var todayHumidity = document.createElement("li");
      todayHumidity.textContent = "Humidity: " + data.main.humidity + "%";
      todayForecast.appendChild(todayHumidity);
      //temp ********************************************************
      var todayTemp = document.createElement("li");
      todayTemp.textContent = "Temperature: " + data.main.temp;
      todayForecast.appendChild(todayTemp);
      //wind speed ********************************************************
      var todayWind = document.createElement("li");
      todayWind.textContent = "Wind: " + data.wind.speed + " Mph";
      todayForecast.appendChild(todayWind);
    });
  ///********* 5 day Forecast *********\\\

  var url5Day =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&cnt=40&q=" +
    userSearch;
    console.log(url5Day)
  fetch(url5Day)
    .then(function (response) {
      // console.log(response) // we are getting a response
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data.list[0].main.humidity + "%");
      // console.log(data.list[0].wind.speed + " Mph");
      // console.log(data.list[0].main.temp);
      for (var i = 0; i < data.list.length; i += 8) {
        // console.log(i);
        // pre-setup ********************************************************
        var showData = document.createElement("ul");
        showData.classList.add("test");
        showData.setAttribute("style", "color:white;");
        forecastEl.appendChild(showData);
        //Date********************************************************
        var todayDate = document.createElement("h6");
        todayDate.textContent = data.list[i].dt_txt;
        showData.appendChild(todayDate);
        //icon********************************************************
        var fiveDayIcon = document.createElement("img");
        fiveDayIcon.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[i].weather[0].icon +
            "@2x.png"
        );
        fiveDayIcon.setAttribute("style", "scale:75%;");
        showData.appendChild(fiveDayIcon);
        // console.log(fiveDayIcon.img); // console.logging nothing/ undefined
        //humidity********************************************************
        var humidityForecast = document.createElement("li");
        humidityForecast.textContent =
          "Humidity: " + data.list[i].main.humidity + "%";
        showData.appendChild(humidityForecast);
        //temp********************************************************
        var tempForecast = document.createElement("li");
        tempForecast.textContent = "Temp: " + data.list[i].main.temp;
        showData.appendChild(tempForecast);
        //wind speed********************************************************
        var windForecast = document.createElement("li");
        windForecast.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
        showData.appendChild(windForecast);
      }
    });
});

selectHistoryEl.addEventListener("click", function getApi() {
  let pulledCity = JSON.parse(localStorage.getItem("storedCity")); // this should be storing the value (e.G. pulledCity = CityName)
  console.log(pulledCity); // this is logging {userSearch: 'Juno'}
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&q=" +
    pulledCity.userSearch; //added userSearch to the end here and it will function *correctly*

  fetch(requestUrl)
    .then(function (response) {
      // console.log(response) // we are getting a response
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let todayForecast = document.createElement("ul");
      todayForecast.classList.add("test");
      todayForecast.setAttribute("style", "color:white;");
      todayWeatherEl.appendChild(todayForecast);
      //city name ********************************************************
      let cityName = document.createElement("h5");
      cityName.textContent = data.name;
      todayForecast.appendChild(cityName);
      //date ********************************************************
      let todaySlot = document.createElement("h5");
      todaySlot.innerHTML = moment.unix(data.dt).format("MMM Do, YYYY"); // leave this alone // had to add.innerHTML to make this a "node"(?)
      todayForecast.appendChild(todaySlot);
      //icon ********************************************************
      var todayIcon = document.createElement("img");
      todayIcon.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );
      todayIcon.setAttribute("style", "scale:75%;");
      todayForecast.appendChild(todayIcon);
      //humidity ********************************************************
      let todayHumidity = document.createElement("li");
      todayHumidity.textContent = "Humidity: " + data.main.humidity + "%";
      todayForecast.appendChild(todayHumidity);
      //temp ********************************************************
      let todayTemp = document.createElement("li");
      todayTemp.textContent = "Temperature: " + data.main.temp;
      todayForecast.appendChild(todayTemp);
      //wind speed ********************************************************
      let todayWind = document.createElement("li");
      todayWind.textContent = "Wind: " + data.wind.speed + " Mph";
      todayForecast.appendChild(todayWind);
    });

  ///********* 5 day Forecast *********\\\

  var Url5day =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=9ecdb8aa9746c79a02aea67b96d3c5a2&cnt=40&q="+
    pulledCity.userSearch;
  fetch(Url5day)
    .then(function (response) {
      // console.log(response) // we are getting a response
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data.list[0].main.humidity + "%");
      // console.log(data.list[0].wind.speed + " Mph");
      // console.log(data.list[0].main.temp);
      for (var i = 1; i < data.list.length; i += 8) {
        // console.log(i);
        // pre-setup ********************************************************
        var showData = document.createElement("ul");
        showData.classList.add("test");
        showData.setAttribute("style", "color:white;");
        forecastEl.appendChild(showData);
        //Date********************************************************
        var todayDate = document.createElement("h6");
        todayDate.textContent = data.list[i].dt_txt;
        showData.appendChild(todayDate);
        //icon********************************************************
        var fiveDayIcon = document.createElement("img");
        fiveDayIcon.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[i].weather[0].icon +
            "@2x.png"
        );
        fiveDayIcon.setAttribute("style", "scale:75%;");
        showData.appendChild(fiveDayIcon);
        // console.log(fiveDayIcon.img); // console.logging nothing/ undefined
        //humidity********************************************************
        var humidityForecast = document.createElement("li");
        humidityForecast.textContent =
          "Humidity: " + data.list[i].main.humidity + "%";
        showData.appendChild(humidityForecast);
        //temp********************************************************
        var tempForecast = document.createElement("li");
        tempForecast.textContent = "Temp: " + data.list[i].main.temp;
        showData.appendChild(tempForecast);
        //wind speed********************************************************
        var windForecast = document.createElement("li");
        windForecast.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
        showData.appendChild(windForecast);
      }
    });
});

function showLastQuery() {
  var pulledCity = JSON.parse(localStorage.getItem("storedCity"));
  // console.log(pulledCity)
  if (pulledCity !== null) {
    document.querySelector(".searchHistory").innerHTML = pulledCity.userSearch;
  }
  // for (var i = 0; i < pulledCity.userSearch.length; i++) {
    // pulledCity.userSearch = document.createElement("button");
    // pulledCity.textContent = document.querySelector(".searchHistory").value;
    // pulledCity.textContent = JSON.parse(localStorage.getItem("storedCity"));
    // queryHistoryExtra.appendChild(pulledCity.userSearch);
  // }
  // console.log(pulledCity.textContent)
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

//NOTE : this wont work ( displays the current day at start of flex box instead of next day, no idea why, i
// have changed the variable names, i have the correct pathways for the list,
// but it keeps showing todays date in the first box of the five day forecast)
// var fiveDaySlot = document.createElement("h5");
// fiveDaySlot.innerHTML = moment
//   .unix(data.list[i].dt_txt)
//   .format("MMM Do, YYYY");
// console.log(
//   fiveDaySlot +
//     " // This is one of the five day conversion of the Unix TimeStamp"
// );
// showData.appendChild(fiveDaySlot);

/*goBtn.addEventListener("click", function storeClick(event) {
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
});*/
