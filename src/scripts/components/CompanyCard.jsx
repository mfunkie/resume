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
      <div className='card card-link company-card'>
        <div className='company-card__image'>
          <a href={this.props.companyWebsite}>
            <img src={this.props.companyImage}/>
          </a>
        </div>
        <div className='company-card__info'>
          <h2>{this.props.title}</h2>
          <p>{this.props.startDate} - {this.props.endDate}</p>
        </div>
      </div>
    );
  }
});

module.exports = CompanyCard;
