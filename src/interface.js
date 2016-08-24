$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temperature-increase').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-decrease').on('click', function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });
});
