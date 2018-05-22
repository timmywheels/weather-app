/* global navigator */
/* global document */
/* global $ */

var api = 'https://fcc-weather-api.glitch.me/api/current?';
var lat;
var lon;

var title = document.getElementById('title');

document.addEventListener('DOMContentLoaded', function() {


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = "lat=" + position.coords.latitude;
        lon = "lon=" + position.coords.longitude;
        api += lat + '&' + lon;
        getWeather(lat, lon);
      });

    }
    else {
      title.innerHTML = "Geolocation is not supported by this browser.";
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

        if (forecast.weather[0].hasOwnProperty('icon')) { //otherwise set weather icon
          $('#icon').attr('src', forecast.weather[0].icon);
        }

        else if (typeof forecast.weather[1] === 'undefined'){
          $('#icon').attr('src', './icons/00.png');
        }

        // else if (forecast.weather[1].hasOwnProperty('icon')) {
          if (forecast.weather[1].icon === '01d') {
            $('#icon').attr('src', './icons/01d.png');
          }
          if (forecast.weather[1].icon === '01n') {
            $('#icon').attr('src', './icons/01n.png');
          }
          if (forecast.weather[1].icon === '02d') {
            $('#icon').attr('src', './icons/02d.png');
          }
          if (forecast.weather[1].icon === '02n') {
            $('#icon').attr('src', './icons/02n.png');
          }
          if (forecast.weather[1].icon === '03d') {
            $('#icon').attr('src', './icons/03d.png');
          }
          if (forecast.weather[1].icon === '03n') {
            $('#icon').attr('src', './icons/03n.png');
          }
          if (forecast.weather[1].icon === '04d') {
            $('#icon').attr('src', './icons/04d.png');
          }
          if (forecast.weather[1].icon === '04n') {
            $('#icon').attr('src', './icons/04n.png');
          }
          if (forecast.weather[1].icon === '09d') {
            $('#icon').attr('src', './icons/09d.png');
          }
          if (forecast.weather[1].icon === '09n') {
            $('#icon').attr('src', './icons/09n.png');
          }
          if (forecast.weather[1].icon === '10d') {
            $('#icon').attr('src', './icons/10d.png');
          }
          if (forecast.weather[1].icon === '10n') {
            $('#icon').attr('src', './icons/10n.png');
          }
          if (forecast.weather[1].icon === '11d') {
            $('#icon').attr('src', './icons/11d.png');
          }
          if (forecast.weather[1].icon === '11n') {
            $('#icon').attr('src', './icons/11n.png');
          }
          if (forecast.weather[1].icon === '13d') {
            $('#icon').attr('src', './icons/13d.png');
          }
          if (forecast.weather[1].icon === '13n') {
            $('#icon').attr('src', './icons/13n.png');
          }
          if (forecast.weather[1].icon === '50d') {
            $('#icon').attr('src', './icons/50d.png');
          }
          if (forecast.weather[1].icon === '50n') {
            $('#icon').attr('src', './icons/50n.png');
          }
          else if ($('#icon').attr('src') === ''){
            $('#icon').css('display', 'none');
          }
        }
      // }
    });
  }


  getLocation();

});
