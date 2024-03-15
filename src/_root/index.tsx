import React from 'react';

import Header from '../components/header/Header';
import Container from '../pages';
import Footer from '../components/footer/Footer';

const App = () => {
  return (
    <main className='wrapper'>
        <Header />
        <Container />
        <Footer />
    </main>
  )
};

export default App;
