/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/ExperienceCard.less');


var ExperienceCard = React.createClass({
  render: function () {
    return (
      <div className='card experience-card'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ExperienceCard;
