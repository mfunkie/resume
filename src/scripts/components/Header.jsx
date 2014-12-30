/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Header.less');


var Header = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Header</p>
        </div>
      );
  }
});

module.exports = Header;


