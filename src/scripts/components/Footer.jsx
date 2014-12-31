/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Footer.less');


var Footer = React.createClass({
  render: function () {
    return (
      <div className='footer'>
        <div className='footer__contact'>
          <a target='_blank'
            href='http://www.github.com/mfunkie'
            className='devicons devicons-github_full' />
        </div>
        <div className='details'>
          <div className='address'>
            <div className='address__street'>380 Stonewall Ct. Apt 7202</div>
            <div className='address__city'>
              <a href='https://www.google.com/maps/place/Mt+Pleasant,+SC/'>Mt. Pleasant, SC 29464</a>
            </div>
          </div>
          <div className='contact'>
            <div className='email'>
              <a href='mailto:mfunk86@gmail.com'>mfunk86@gmail.com</a>
            </div>
            <div className='phone'>
              <a href='tel:8438015216'>(843) 801-5216</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
