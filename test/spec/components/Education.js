'use strict';

describe('Education', function () {
  var Education, component;

  beforeEach(function () {
    Education = require('../../../src/scripts/components/Education.jsx');
    component = Education();
  });

  it('should create a new instance of Education', function () {
    expect(component).toBeDefined();
  });
});
