import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Services } from './components/sections/Services';
import { Marquee } from './components/ui/Marquee';
import { CaseProx } from './components/sections/CaseProx';
import { Portfolio } from './components/sections/Portfolio';
import { Process } from './components/sections/Process';
import { Pricing } from './components/sections/Pricing';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="grain">
      <Header />
      <main>
        <Hero />
        <div className="gradient-divider" />
        <Problem />
        <div className="gradient-divider" />
        <Services />
        <Marquee />
        <CaseProx />
        <div className="gradient-divider" />
        <Portfolio />
        <div className="gradient-divider" />
        <Process />
        <div className="gradient-divider" />
        <Pricing />
        <div className="gradient-divider" />
        <About />
        <div className="gradient-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
