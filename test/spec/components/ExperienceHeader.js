'use strict';

describe('ExperienceHeader', function () {
  var ExperienceHeader, component;

  beforeEach(function () {
    ExperienceHeader = require('../../../src/scripts/components/ExperienceHeader.jsx');
    component = ExperienceHeader();
  });

  it('should create a new instance of ExperienceHeader', function () {
    expect(component).toBeDefined();
  });
});
