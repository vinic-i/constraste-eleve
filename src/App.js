
import './App.css';
import { useState } from 'react';
import ContrasteEleve from './components/Contraste/ContrasteEleve';
// import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Visualizer from './components/Visualizer/Visualizer';
import Avantages from './components/Avantages/Avantages';
import Footer from './components/Footer/Footer';

function App() {
  const [contrasteEleve, setContrasteEleve] = useState(0)
  const handleContrasteEleve = (v) => {
    setContrasteEleve(v)
  }
  return (
    <>
      <div className='main'>
        <ContrasteEleve hangleContrasteEleve={handleContrasteEleve} />
        {/* <Header /> */}
        <Hero contrasteEleve={contrasteEleve} />
        <div className="container">
          <Visualizer contrasteEleve={contrasteEleve} />
          <Avantages contrasteEleve={contrasteEleve} />
        </div>
      </div>
      <Footer contrasteEleve={contrasteEleve} />
    </>
  );
}

export default App;
