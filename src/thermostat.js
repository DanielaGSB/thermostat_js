'use strict';

function Thermostat() {
  this.temperature = 20;

  Thermostat.prototype.getTemperature = function(temperature){
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function() {
    this.temperature +=1;
  };

  Thermostat.prototype.decreaseTemperature = function() {
    this.temperature -=1;
  };

}
