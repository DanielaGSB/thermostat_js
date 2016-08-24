$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
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
    $('#power-saving-status').text('on');
  });

  $('#powersavingmode-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

});
