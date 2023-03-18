import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';


function MainPage() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default MainPage;
