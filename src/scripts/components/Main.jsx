/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Main.less');


var Main = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Main</p>
        </div>
      );
  }
});

module.exports = Main;


