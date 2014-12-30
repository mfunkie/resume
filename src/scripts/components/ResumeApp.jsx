/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

// Components
var Main = require('./Main');

var ResumeApp = React.createClass({
  render: function() {
    return (
      <Main />
    );
  }
});

React.render(<ResumeApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ResumeApp;
