import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Recruitment from './components/Recruitment';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Recruitment />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;