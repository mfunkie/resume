'use strict';

describe('EducationCard', function () {
  var EducationCard, component;

  beforeEach(function () {
    EducationCard = require('../../../src/scripts/components/EducationCard.jsx');
    component = EducationCard();
  });

  it('should create a new instance of EducationCard', function () {
    expect(component).toBeDefined();
  });
});
