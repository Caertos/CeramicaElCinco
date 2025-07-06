import Banner from './components/banner/Banner';
import About from './components/about/About';
import ProductionLine from './components/productionLine/ProductionLine';
import HowWeDoIt from './components/howWeDoIt/HowWeDoIt';
import OurClients from './components/ourClients/OurClients';
import Footer from './components/footer/Footer';

import './App.css'

function App() {
  return (
    <>
      <Banner/>
      <About/>
      <ProductionLine/>
      <HowWeDoIt/>
      <OurClients/>
      <Footer/>
    </>
  );
}

export default App
