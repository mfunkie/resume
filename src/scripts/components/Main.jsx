'use strict';

var React = require('react/addons');
var Header = require('./Header');
var Experience = require('./Experience');
var Education  = require('./Education');
var Footer = require('./Footer');

require('../../../node_modules/purecss/grids.css');
require('../../../node_modules/purecss/grids-responsive.css');
require('../../styles/main.less');

var Main = React.createClass({
  render: function () {
    return (
        <div>
          <Header />
          <Experience />
          <Education />
          <Footer />
        </div>
      );
  }
});

module.exports = Main;
