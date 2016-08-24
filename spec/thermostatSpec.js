'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('press up temperature button', function() {
    it('increases the temperature by 1 degree', function() {
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });
  describe('press down temperature button', function() {
    it('increases the temperature by 1 degree', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });
});
