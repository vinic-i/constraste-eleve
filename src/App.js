
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Avantages from './components/Avantages';
import ContrasteEleve from './components/ContrasteEleve';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [contrasteEleve, setContrasteEleve] = useState(0)
  const handleContrasteEleve = (v) => {
    setContrasteEleve(v)
  }
  return (
    <>
      <div className='main'>
        <div className="container">
          {/* <Header /> */}
          <Avantages contrasteEleve={contrasteEleve} />
          <ContrasteEleve hangleContrasteEleve={handleContrasteEleve} />
        </div>
      </div>
      <Footer contrasteEleve={contrasteEleve} />
    </>
  );
}

export default App;
