$(document).ready(function() {
  var thermostat = new Thermostat();
  var color = 'black';

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#temperature-increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersavingmode-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON');
  });

  $('#powersavingmode-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF');
  });

  function defaultWeather() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=london';
    var token = '&appid=45fd069205600da26b1ef07304444c8d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      var temp = (data.main.temp);
      $('#current-temperature').text('I do not know that city, but in London it is ' + data.main.temp.toFixed());
    });
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    if (city === null || city === '') {
      defaultWeather();
    } else {
      displayWeather(city);
    }
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=45fd069205600da26b1ef07304444c8d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp.toFixed());
    });
    $.get(url + token + units, function(data) {
      $('#max-temperature').text(data.main.temp_max.toFixed());
    });
    $.get(url + token + units, function(data) {
      $('#min-temperature').text(data.main.temp_min.toFixed());
    });
  }
});
