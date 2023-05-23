
import './App.css';
import { useState } from 'react';
import ContrasteEleve from './components/Contraste/ContrasteEleve';
// import Header from './components/Header/Header';
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
        <div className="container">
          <ContrasteEleve hangleContrasteEleve={handleContrasteEleve} />
          {/* <Header /> */}
          <Visualizer contrasteEleve={contrasteEleve} />
          <Avantages contrasteEleve={contrasteEleve} />
        </div>
      </div>
      <Footer contrasteEleve={contrasteEleve} />
    </>
  );
}

export default App;
