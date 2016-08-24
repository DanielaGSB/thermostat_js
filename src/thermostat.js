'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSavingMode = true;

  Thermostat.prototype.getTemperature = function(temperature){
    return this.temperature;
  };

  Thermostat.prototype.isPowerSavingModeOn = function(){
    return this.PowerSavingMode;
  };

  Thermostat.prototype.increaseTemperature = function() {
    this.temperature +=1;
  };

  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (this.isMinimumTemperature()) {
      return 'Minimum temperature reached';
    } else {
      this.temperature -=1;
    }
  };

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    if (this.isPowerSavingModeOn()) {
      this.PowerSavingMode = false;
    }
  };

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    if (this.isPowerSavingModeOn() === false) {
      this.PowerSavingMode = true;
    }
  };
}
