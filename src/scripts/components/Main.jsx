/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Header = require('./Header');
var Experience = require('./Experience');

require('../../../node_modules/purecss/pure.css')
require('../../styles/main.less');

var Main = React.createClass({
  render: function () {
    return (
        <div>
          <Header />
          <Experience />
        </div>
      );
  }
});

module.exports = Main;
