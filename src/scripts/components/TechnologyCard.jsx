'use strict';

var React = require('react/addons');

require('../../styles/TechnologyCard.less');

var TechnologyCard = React.createClass({
  propTypes: {
    technologyWebsite: React.PropTypes.string,
    technologyImage: React.PropTypes.string,
    title: React.PropTypes.string,
    technologyInfo: React.PropTypes.string
  },

  render: function () {
    return (
      <a href={this.props.technologyWebsite}
        className='card card-link technology-card'>
        <div className='technology-card__image'>
          <img src={this.props.technologyImage} width='80' height='80'/>
        </div>
        <div className='technology-card__info'>
          <h2>{this.props.title}</h2>
        </div>
      </a>
    );
  }
});

module.exports = TechnologyCard;
