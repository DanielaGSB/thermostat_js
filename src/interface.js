$(document).ready(function() {
  var thermostat = new Thermostat();
  var color = 'orange';

  updateTemperature();
  energyColour();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

  $('#temperature-increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
    energyColour();
  });

  $('#temperature-decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
    energyColour();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
    energyColour();
  });

  $('#powersavingmode-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersavingmode-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  function energyColour() {
    if (thermostat.energyUsage() == 'low') {
      color = 'green';
    } else if (thermostat.energyUsage() == 'high') {
      color = 'red'
    }
    $('#temperature').css('color', color);
  }
// });
  //
  // The thermostat should colour the display based on energy usage
  //  - < 18 is green, < 25 is yellow, otherwise red


});
