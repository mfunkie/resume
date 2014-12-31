/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Education.less');
var clemsonImage = require('../../images/clemson.png');

var EducationCard = require('./EducationCard');
var DetailCard = require('./DetailCard');
var TechnologyCard = require('./TechnologyCard');

var Education = React.createClass({
  render: function () {
    var technologyCards = [
    <TechnologyCard
      title='C#'
      technologyWebsite='http://www.microsoft.com'
      technologyIcon='visualstudio'/>,
    <TechnologyCard
      title='Ruby'
      technologyWebsite='https://www.ruby-lang.org/en/'
      technologyIcon='ruby'/>
    ];

    return (
      <div className='pure-g'>
        <div className='pure-u-1 pure-u-xl-1-3'>
          <EducationCard
            school='Clemson University'
            major='Computer Science'
            website='http://www.clemson.edu'
            image={clemsonImage}
            graduation='May, 2008'/>
        </div>
        <div className='pure-u-1 pure-u-xl-2-3'>
          <DetailCard>
            <ul className='detail-description'>
              <li className='detail-description__item'>Worked in a team to produce a motion-controlled based sky diving game, using C#.</li>
              <li className='detail-description__item'>Developed a compiler for a lisp-based functional language, using Ruby.</li>
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

module.exports = Education;
