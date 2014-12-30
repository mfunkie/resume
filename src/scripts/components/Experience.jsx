/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Experience.less');

var CompanyCard    = require('./CompanyCard');
var ExperienceCard = require('./ExperienceCard');
var TechnologyCard = require('./TechnologyCard');

var ExperienceBoomTown = require('./ExperienceBoomTown');
var ExperienceBlackbaud = require('./ExperienceBlackbaud');

var boomTownImage   = require('../../images/boomtownroi.png');
var javascriptImage = require('../../images/javascript.png');
var angularImage    = require('../../images/angular.png');


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
