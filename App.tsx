import React from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { LeadMagnet } from './components/LeadMagnet';
import { WhyUs } from './components/WhyUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen font-sans text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <LeadMagnet />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;