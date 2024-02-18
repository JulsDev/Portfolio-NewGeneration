import React from 'react';

import About from './About';
import Home from './Home/Home';
import './styles.scss';
import ContactMe from './ContactMe/ContactMe';

const Page = () => {
  return (
    <div className='pages-container'>
      <Home />
      <About />
      <ContactMe />
    </div>
  )
};

export default Page;