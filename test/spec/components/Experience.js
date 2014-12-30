'use strict';

describe('Experience', function () {
  var Experience, component;

  beforeEach(function () {
    Experience = require('../../../src/scripts/components/Experience.jsx');
    component = Experience();
  });

  it('should create a new instance of Experience', function () {
    expect(component).toBeDefined();
  });
});
