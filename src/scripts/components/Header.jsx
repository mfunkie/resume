/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Header.less');


var Header = React.createClass({
  render: function () {
    return (
      <div className='header'>
        <div className='name'>
          <h1>Mark Funk</h1>
        </div>
        <div className='description'>
          <h2>Web Developer</h2>
        </div>
      </div>
    );
  }
});

module.exports = Header;
