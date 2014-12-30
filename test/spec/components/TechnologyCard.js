'use strict';

describe('TechnologyCard', function () {
  var TechnologyCard, component;

  beforeEach(function () {
    TechnologyCard = require('../../../src/scripts/components/TechnologyCard.jsx');
    component = TechnologyCard();
  });

  it('should create a new instance of TechnologyCard', function () {
    expect(component).toBeDefined();
  });
});
