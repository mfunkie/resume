/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/CompanyCard.less');


var CompanyCard = React.createClass({
  propTypes: {
    company: React.PropTypes.string,
    companyWebsite: React.PropTypes.string,
    companyImage: React.PropTypes.string,
    title: React.PropTypes.string,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string
  },

  render: function () {
    return (
      <a href={this.props.companyWebsite} target='_blank'>
      <div className='card card-link company-card'>
        <div className='company-card__image'>
          <img src={this.props.companyImage}/>
        </div>
        <div className='company-card__info'>
          <h2>{this.props.title}</h2>
          <p>{this.props.startDate} - {this.props.endDate}</p>
        </div>
      </div>
      </a>
    );
  }
});

module.exports = CompanyCard;
