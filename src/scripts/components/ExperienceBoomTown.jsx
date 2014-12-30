'use strict';

var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CompanyCard    = require('./CompanyCard');
var ExperienceCard = require('./ExperienceCard');
var TechnologyCard = require('./TechnologyCard');

var boomTownImage   = require('../../images/boomtownroi.png');
var javascriptImage = require('../../images/javascript.png');
var angularImage    = require('../../images/angular.png');

var boomTownItems = [
'Senior Interaction Engineer on BoomTown\'s CRM team.',
'Co-maintainer of the Pattern Library for the CRM',
'Provided training on Angular.js for the CRM team as we adopted it to the platform.',
'Wrote the front-end of Best Fit Leads 2.0 using Angular.js. Engineered several re-usable directives and services during the development of Best-Fit Leads to make future projects easier to build.',
'Developed and maintained the build tools for all Angular features in the CRM using Grunt, Bower, and npm.',
'Worked on the 3rd Party Lead Integration tool that allows agents and brokers to manage all of their leads in one place.'
];

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
        technologyImage={angularImage}/>
    ];


    return (
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
          <ExperienceCard experienceItems={boomTownItems}>
          <ul>
            {boomTownItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </ExperienceCard>
        <ReactCSSTransitionGroup transitionName='technology-card' transitionLeave={false}>
          {technologyCards}
        </ReactCSSTransitionGroup>

        </div>
      </div>
    );
  }
});

module.exports = ExperienceBoomTown;
