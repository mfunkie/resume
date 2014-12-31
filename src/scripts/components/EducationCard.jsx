/**
* @jsx React.DOM
*/

'use strict';

var React = require('react/addons');

require('../../styles/EducationCard.less');

var EducationCard = React.createClass({
  propTypes: {
    school: React.PropTypes.string,
    major: React.PropTypes.string,
    website: React.PropTypes.string,
    image: React.PropTypes.string,
    graduation: React.PropTypes.string
  },

  render: function () {
    return (
      <a href={this.props.website} target='_blank'>
      <div className='card card-link education-card'>
        <div className='education-card__image'>
          <img src={this.props.image}/>
        </div>
        <div className='education-card__info'>
          <h2>{this.props.major}</h2>
          <p>{this.props.graduation}</p>
        </div>
      </div>
      </a>
    );
  }
});

module.exports = EducationCard;
