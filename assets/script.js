// API

//need event button listener on search click ( or form submit?)

//Hooks

function getApi() {
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=9ecdb8aa9746c79a02aea67b96d3c5a2`;
}

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then (function (data){
    // for loop here to insert data?
  })