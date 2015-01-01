'use strict';

var React = require('react/addons');

// Components
var CompanyCard    = require('./CompanyCard');
var DetailCard     = require('./DetailCard');
var TechnologyCard = require('./TechnologyCard');

// Images
var boomTownImage   = require('../../images/boomtownroi.png');
var javascriptImage = require('../../images/javascript.png');

// Markdown
var boomTownDetails = require('../../docs/ExperienceBoomTown.md');

var ExperienceBoomTown = React.createClass({
  render: function () {
    var technologyCards = [
      <TechnologyCard
        title='Javascript'
        technologyWebsite='http://www.w3.org/'
        technologyImage={javascriptImage}/>,
      <TechnologyCard
        title='React'
        technologyWebsite='http://www.reactjs.com'
        technologyImage={'http://facebook.github.io/react/img/logo.svg'}/>,
      <TechnologyCard
        title='Angular'
        technologyWebsite='http://www.angularjs.org'
        technologyIcon='angular'/>,
      <TechnologyCard
        title='node.js'
        technologyWebsite='http://nodejs.org'
        technologyIcon='nodejs_small'/>,
      <TechnologyCard
        title='Gulp'
        technologyWebsite='http://gulpjs.com/'
        technologyIcon='gulp'/>,
      <TechnologyCard
        title='npm'
        technologyWebsite='http://npmjs.org/'
        technologyIcon='npm'/>,
      <TechnologyCard
        title='Bower'
        technologyWebsite='http://bower.io/'
        technologyIcon='bower'/>,
      <TechnologyCard
        title='Less'
        technologyWebsite='http://lesscss.org/'
        technologyIcon='less'/>,
      <TechnologyCard
        title='CSS3'
        technologyWebsite='http://www.w3.org/'
        technologyIcon='css3'/>,
      <TechnologyCard
        title='asp.net'
        technologyWebsite='http://www.asp.net'
        technologyIcon='visualstudio'/>,
      <TechnologyCard
        title='mssql'
        technologyWebsite='http://www.microsoft.com/en-us/server-cloud/products/sql-server/'
        technologyIcon='msql_server' />
    ];

    return (
      <div className='pure-g'>
        <div className='pure-u-1 pure-u-xl-1-3'>
          <CompanyCard
            title='Senior Software Engineer'
            company='BoomTownROI'
            companyWebsite='http://www.boomtownroi.com'
            companyImage={boomTownImage}
            startDate='March, 2013'
            endDate='Current'/>
        </div>
        <div className='pure-u-1 pure-u-xl-2-3'>
          <DetailCard>
            <div dangerouslySetInnerHTML={{ __html: boomTownDetails }} />
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

module.exports = ExperienceBoomTown;
