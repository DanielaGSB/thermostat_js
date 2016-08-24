'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;

  Thermostat.prototype.getTemperature = function(temperature){
    return this.temperature;
  };

  Thermostat.prototype.isPowerSavingModeOn = function(){
    return this.PowerSavingMode;
  };

  Thermostat.prototype.increaseTemperature = function() {
    if (this.isMaximumTemperature()) {
      return 'Maximum temperature reached';
    }
    this.temperature +=1;
  };

  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
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
