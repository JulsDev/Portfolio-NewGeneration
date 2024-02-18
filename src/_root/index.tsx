import React from 'react';

import Header from '../components/header/Header';
import Home from '../pages';
import Footer from '../components/footer/Footer';

const App = () => {
  return (
    <main className='wrapper'>
        <Header />
        <Home />
        <Footer />
    </main>
  )
};

export default App;
