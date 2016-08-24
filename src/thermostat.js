'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.getTemperature = function(temperature){
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function() {
    this.temperature +=1;
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (this.temperature>this.MINIMUM_TEMPERATURE) {
      this.temperature -=1;
    } else {
      return 'Minimum temperature reached'
    }
  };

}
