$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);


  $('#temperature-increase').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.temperature);
  });
});
