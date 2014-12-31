'use strict';

var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CompanyCard    = require('./CompanyCard');
var ExperienceCard = require('./ExperienceCard');
var TechnologyCard = require('./TechnologyCard');

var boomTownImage   = require('../../images/boomtownroi.png');
var javascriptImage = require('../../images/javascript.png');

var boomTownItems = [
'Co-maintainer of the Pattern Library for the CRM',
'Tuned features in the CRM for front-end performance.',
'Provided training on Angular.js for the CRM team.',
'Engineered several re-usable components and services to make future projects easier to build.',
'Developed and maintained the build tools for all Angular features in the CRM.',
'Worked on a Lead Integration tool that consumes emails from third parties and creates Leads in the database.'
];

/*
Conceptualize and implement application features, both consumer facing and product based
Ensure the delivery of a rich and responsive user experience
Be a proactive member of an autonomous, cross-disciplined, mission and goal driven Product development team
Thrive in a fast-paced and collaborative environment, solving unique technical challenges
Continually research and learn the latest techniques and best practices for UI development and performance
- See more at: http://boomtownroi.simplicant.com/jobs/17478-ui-engineer-front-end/detail#sthash.kyOArKy3.dpuf

*/

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
        technologyIcon='less'/>
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
          <h1 className='experience-header'>Description</h1>
          <ExperienceCard>
            <ul className='experience-description'>
              {boomTownItems.map((item, index) => {
                return <li className='experience-description__item' key={index}>{item}</li>;
              })}
            </ul>
          </ExperienceCard>
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
