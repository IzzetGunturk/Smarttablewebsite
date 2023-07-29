import React from 'react';
import { useEffect } from 'react';
import Header from './components/header'
import Hero from './components/hero'
import TextImage from './components/textImage'
import Cards from './components/cards'
import SplineObject from './components/splineObject';
import Footer from './components/footer';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect (() => {
    AOS.init({duration: 1500});
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <TextImage />
      <Cards />
      <SplineObject />
      <Footer />
    </>
  );
}

export default App;