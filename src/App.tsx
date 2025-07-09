import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BanhoTosa from './components/BanhoTosa';
import Veterinario from './components/Veterinario';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BanhoTosa />
      <Veterinario />
      <Testimonials />
      <Map />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;