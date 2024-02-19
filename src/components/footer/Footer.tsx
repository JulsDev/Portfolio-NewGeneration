import React from 'react';
import Navigation from '../navigation/Navigation';
import './Footer.scss';
import SocialLinks from '../social/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer__copyright'>
          <div className='copyright__info'>
            <p className='copyright__year'>© {currentYear}</p>
            <p className='copyright__username'>Julia Aseeva</p>
            <p className='copyright__desc'>
              Personal website of a web developer
            </p>
          </div>
        </div>
        <div className='footer__data'>
          <div className='footer__menu'>
            <Navigation />
          </div>
          <div className='footer__columns'>
            <div className='column'>
              <p className='footer__text'>If you have any questions, or have interesting suggestions, you can find me here</p>
              <div className='footer__social'>
                <SocialLinks />
              </div>
            </div>
            <div className='column'>
              <p className='footer__text'>Always write code as if it will be accompanied by a violent psychopath who knows where you live.</p>
              <p className='footer__text'>Martin Golding</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;