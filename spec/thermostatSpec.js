'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.giveTemperature()).toEqual(20);
  });

  // describe('press up temperature button', function() {
  //   it('should increase the temperature by 1 degree', function() {
  //     thermostat.increaseTemperature();
  //     expect(thermostat.giveTemperature()).toEqual(21);
  //   });
  // });
});
