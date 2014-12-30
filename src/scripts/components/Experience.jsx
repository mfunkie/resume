/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Experience.less');

var CompanyCard = require('./CompanyCard');

var boomTownImage = require('../../images/boomtownroi.png');
var blackbaudImage = require('../../images/blackbaud.png');

var Experience = React.createClass({
  render: function () {
    return (
      <div>
        <div className='pure-g'>
          <div className='pure-u-1-3'>
            <CompanyCard
              title='Senior Software Engineer'
              company='BoomTownROI'
              companyWebsite='http://www.boomtownroi.com'
              companyImage={boomTownImage}
              startDate='March, 2013'
              endDate='Current'/>
          </div>
          <div className='pure-u-2-3'>
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-3'>
            <CompanyCard
              title='Senior Software Engineer'
              company='Blackbaud'
              companyWebsite='http://www.blackbaud.com'
              companyImage={blackbaudImage}
              startDate='June, 2008'
              endDate='March, 2013'/>
          </div>
          <div className='pure-u-2-3'>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Experience;
