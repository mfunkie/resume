'use strict';

var React = require('react/addons');

require('../../styles/Experience.less');

var ExperienceBoomTown  = require('./ExperienceBoomTown');
var ExperienceBlackbaud = require('./ExperienceBlackbaud');

var Experience = React.createClass({
  render: function () {
    return (
      <div>
        <ExperienceBoomTown />
        <ExperienceBlackbaud />
      </div>
    );
  }
});

module.exports = Experience;
