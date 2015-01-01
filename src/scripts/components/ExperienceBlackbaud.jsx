'use strict';

var React = require('react/addons');

// Components
var CompanyCard    = require('./CompanyCard');
var DetailCard     = require('./DetailCard');
var TechnologyCard = require('./TechnologyCard');

// Images
var blackbaudImage  = require('../../images/blackbaud.png');
var javascriptImage = require('../../images/javascript.png');

// Markdown
var blackbaudDetails = require('../../docs/ExperienceBlackbaud.md');

var ExperienceBlackbaud = React.createClass({
  render: function () {
    var technologyCards = [
      <TechnologyCard
        title='asp.net'
        technologyWebsite='http://www.asp.net'
        technologyIcon='visualstudio'/>,
      <TechnologyCard
        title='mssql'
        technologyWebsite='http://www.microsoft.com/en-us/server-cloud/products/sql-server/'
        technologyIcon='msql_server' />,
      <TechnologyCard
        title='C#'
        technologyWebsite='http://www.microsoft.com'
        technologyIcon='visualstudio'/>,
      <TechnologyCard
        title='msbuild'
        technologyWebsite='http://www.microsoft.com'
        technologyIcon='code'/>,
      <TechnologyCard
        title='Javascript'
        technologyWebsite='http://www.w3.org/'
        technologyImage={javascriptImage}/>,
      <TechnologyCard
        title='CSS3'
        technologyWebsite='http://www.w3.org/'
        technologyIcon='css3'/>
    ];

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
          <DetailCard>
            <div dangerouslySetInnerHTML={{ __html: blackbaudDetails}} />
          </DetailCard>
          <h1 className='experience-header'>Technologies</h1>
          <div className='technology-card-list'>
            {technologyCards}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExperienceBlackbaud;
