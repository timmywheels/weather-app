var api = 'https://fcc-weather-api.glitch.me/api/current?';
var lat;
var lon;

var title = document.getElementById('title');

document.addEventListener('DOMContentLoaded', function() {

  function getLocation() {

    if (navigator.geolocation) { //check if brower supports geolocation
      navigator.geolocation.getCurrentPosition(function(position) {

        lat = "lat=" + position.coords.latitude; //get latitude
        lon = "lon=" + position.coords.longitude; //get longitude

        api += lat + '&' + lon; //create api call url

        getWeather(lat, lon); //call api

      });

    }
    else {
      title.innerHTML = "Geolocation is not supported by this browser."; //otherwise display an error
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

        // console.log(apiUrl);

        $('#title').text('Weather Report'); //set title on load
        $('#city').text(forecast.name); //set weather city

        var tempInCelsius = Math.round(forecast.main.temp); //temp in celsis, rounded to nearest whole num
        var tempInFahrenheit = Math.round(tempInCelsius * (9 / 5) + 32); //convert celsius to fahrenheit

        $('#temp').text(tempInFahrenheit + '°F'); //set default temp as fahrenheit


        $('#tempSwitch').on('click', function(e) {

          if ($('input[type=checkbox]').prop('checked') != true) { //if switch is checked, temp is celsius

            $('#temp').text(tempInCelsius + '°C');

          }
          else {

            $('#temp').text(tempInFahrenheit + '°F'); //otherwise temp is fahrenheit

          }

        });

        $('#description').text(forecast.weather[0].description); //set weather description

        if (forecast.weather[0].hasOwnProperty('icon')) { //if forecast object contains icon url, use it
          $('#icon').attr('src', forecast.weather[0].icon);
        }

        else if (typeof forecast.weather[1] === 'undefined') { //if it doesn't have icon url, or icon code display default img
          $('#icon').attr('src', './icons/00.png');
        }
        else if (forecast.weather[1].icon === '01d') { //if it has icon code, display corresponding image
          $('#icon').attr('src', './icons/01d.png');
        }
        else if (forecast.weather[1].icon === '01n') {
          $('#icon').attr('src', './icons/01n.png');
        }
        else if (forecast.weather[1].icon === '02d') {
          $('#icon').attr('src', './icons/02d.png');
        }
        else if (forecast.weather[1].icon === '02n') {
          $('#icon').attr('src', './icons/02n.png');
        }
        else if (forecast.weather[1].icon === '03d') {
          $('#icon').attr('src', './icons/03d.png');
        }
        else if (forecast.weather[1].icon === '03n') {
          $('#icon').attr('src', './icons/03n.png');
        }
        else if (forecast.weather[1].icon === '04d') {
          $('#icon').attr('src', './icons/04d.png');
        }
        else if (forecast.weather[1].icon === '04n') {
          $('#icon').attr('src', './icons/04n.png');
        }
        else if (forecast.weather[1].icon === '09d') {
          $('#icon').attr('src', './icons/09d.png');
        }
        else if (forecast.weather[1].icon === '09n') {
          $('#icon').attr('src', './icons/09n.png');
        }
        else if (forecast.weather[1].icon === '10d') {
          $('#icon').attr('src', './icons/10d.png');
        }
        else if (forecast.weather[1].icon === '10n') {
          $('#icon').attr('src', './icons/10n.png');
        }
        else if (forecast.weather[1].icon === '11d') {
          $('#icon').attr('src', './icons/11d.png');
        }
        else if (forecast.weather[1].icon === '11n') {
          $('#icon').attr('src', './icons/11n.png');
        }
        else if (forecast.weather[1].icon === '13d') {
          $('#icon').attr('src', './icons/13d.png');
        }
        else if (forecast.weather[1].icon === '13n') {
          $('#icon').attr('src', './icons/13n.png');
        }
        else if (forecast.weather[1].icon === '50d') {
          $('#icon').attr('src', './icons/50d.png');
        }
        else if (forecast.weather[1].icon === '50n') {
          $('#icon').attr('src', './icons/50n.png');
        }
        else if ($('#icon').attr('src') === '') {
          $('#icon').css('display', 'none');
        }
      }
    });
  }
  getLocation();
});
