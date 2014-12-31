/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/DetailCard.less');


var DetailCard = React.createClass({
  render: function () {
    return (
      <div className='card detail-card'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = DetailCard;
