'use strict';

var React = require('react/addons');

require('../../../node_modules/devicons/css/devicons.css');

require('../../styles/TechnologyCard.less');

var TechnologyCard = React.createClass({
  propTypes: {
    technologyWebsite: React.PropTypes.string,
    technologyImage: React.PropTypes.string,
    technologyIcon: React.PropTypes.string,
    title: React.PropTypes.string,
    technologyInfo: React.PropTypes.string
  },

  render: function () {
    var isImage = !!this.props.technologyImage;
    var pic = null;
    var iconClass = 'technology-card__icon';
    if (isImage) {
      pic = (
        <div className='technology-card__image'>
          <img src={this.props.technologyImage} width='40' height='40'/>
        </div>
      );
    } else {
      iconClass += ' technology-card__icon-' + this.props.technologyIcon;
      pic = (
        <div className={iconClass}>
          <span className={'devicons devicons-' + this.props.technologyIcon}/>
        </div>
      );
    }

    return (
      <a href={this.props.technologyWebsite} target='_blank'
        className='card card-link technology-card'>
        {pic}
        <div className='technology-card__info'>
          <h3>{this.props.title}</h3>
        </div>
      </a>
    );
  }
});

module.exports = TechnologyCard;
