import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Services } from './components/sections/Services';
import { CaseProx } from './components/sections/CaseProx';
import { Portfolio } from './components/sections/Portfolio';
import { Process } from './components/sections/Process';
import { Pricing } from './components/sections/Pricing';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CaseProx />
        <Portfolio />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
