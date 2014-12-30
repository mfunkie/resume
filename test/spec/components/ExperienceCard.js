'use strict';

describe('ExperienceCard', function () {
  var ExperienceCard, component;

  beforeEach(function () {
    ExperienceCard = require('../../../src/scripts/components/ExperienceCard.jsx');
    component = ExperienceCard();
  });

  it('should create a new instance of ExperienceCard', function () {
    expect(component).toBeDefined();
  });
});
