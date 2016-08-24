'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('has a minimum of 10 degrees', function(){
    for (var i = 0; i <11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  describe('press up temperature button', function() {
    it('increases the temperature by 1 degree', function() {
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('press down temperature button', function() {
    it('decreases the temperature by 1 degree', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
    });

    it('can not be decreased more than its minimum temperature', function(){
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemperature();
      }
        thermostat.decreaseTemperature();
      expect(thermostat.decreaseTemperature()).toEqual('Minimum temperature reached');
    });
  });

  describe('power saving mode', function(){
    it('is on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('can be turned off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('can be turned back on', function(){
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getTemperature()).toEqual(25);
      expect(thermostat.increaseTemperature()).toEqual('Maximum temperature reached');
    });
  });
  describe('when power saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getTemperature()).toEqual(32);
      expect(thermostat.increaseTemperature()).toEqual('Maximum temperature reached');
    });
  });
});
