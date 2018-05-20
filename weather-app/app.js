/* global navigator */
/* global document */
/* global $ */

var api = 'https://fcc-weather-api.glitch.me/api/current?';
var lat;
var lon;

var notice = document.getElementById('notice');
// var startLat = document.getElementById('startLat');
// var startLon = document.getElementById('startLon');
// var description = document.getElementById('description');


document.addEventListener('DOMContentLoaded', function() {


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = "lat=" + position.coords.latitude;
        lon = "lon=" + position.coords.longitude;
        api += lat + '&' + lon;
        // console.log(api);
        getWeather(lat, lon);
      });

    }
    else {
      notice.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function getWeather(lat, lon) {
    var apiUrl = api;

    $.ajax({
      url: apiUrl,
      success: function(forecast) {
        $('#loader').fadeOut(500); //hide loader on success
        $('#bar').fadeIn(1000); //display elements on success
        $('#icon').fadeIn(1000);
        $('.switch').fadeIn(1000);

        console.log(apiUrl);
        JSON.stringify(forecast);
        $('#title').text('Weather Report'); //set title on load
        $('#city').text(forecast.name); //set weather city

        var tempInCelsius = Math.round(forecast.main.temp); //round temps to nearest whole num
        var tempInFahrenheit = Math.round(tempInCelsius * (9 / 5) + 32);

        $('#temp').text(tempInFahrenheit + '°F'); //set default temp as fahrenheit


        $('#tempSwitch').on('click', function(e) {

          if ($('input[type=checkbox]').prop('checked') != true) { //if switch is checked, convert temp to celsius

            $('#temp').text(tempInCelsius + '°C');

          }
          else {
            $('#temp').text(tempInFahrenheit + '°F'); //otherwise convert temp to fahrenheit
          }

        });

        $('#description').text(forecast.weather[0].description); //set weather description
        $('#icon').attr('src', forecast.weather[0].icon); //set weather icon


      }
    });
  }


  getLocation();

});
