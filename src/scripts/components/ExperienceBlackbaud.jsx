'use strict';

var React = require('react/addons');

var CompanyCard    = require('./CompanyCard');
var DetailCard     = require('./DetailCard');
var TechnologyCard = require('./TechnologyCard');

var blackbaudImage  = require('../../images/blackbaud.png');
var javascriptImage = require('../../images/javascript.png');

var blackbaudItems = [
'Participated as an active member in a scrum team using rapid development to produce new and iterative features of software on time reliably.',
'Developed ticketing software from the initial development stages to the release to clients.',
'Created pages for ticketing software utilizing an internal platform that uses XML and SQL on the server-side, and HTML, CSS, and Javascript on the client-side.',
'Served as a mentor and lead engineer on the build team for all next generation products for the company.',
'Wrote utilities for patching and releasing software, significantly reducing the time to release a patch.'
];

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
            <ul className='detail-description'>
              {blackbaudItems.map((item, index) => {
                return <li className='detail-description__item' key={index}>{item}</li>;
              })}
            </ul>
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
