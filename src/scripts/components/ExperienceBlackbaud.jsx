'use strict';

var React = require('react/addons');

var CompanyCard    = require('./CompanyCard');
var DetailCard     = require('./DetailCard');

var blackbaudImage  = require('../../images/blackbaud.png');

var ExperienceBlackbaud = React.createClass({
  render: function () {
    return (
      <div className='pure-g'>
        <div className='pure-u-1 pure-u-xl-1-3'>
          <CompanyCard
            title='Senior Software Engineer'
            company='Blackbaud'
            companyWebsite='http://www.blackbaud.com'
            companyImage={blackbaudImage}
            startDate='June, 2008'
            endDate='March, 2013'/>
        </div>
        <div className='pure-u-1 pure-u-xl-2-3'>
        </div>
      </div>
    );
  }
});

module.exports = ExperienceBlackbaud;
