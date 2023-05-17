
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Avantages from './components/Avantages';
import ContrasteEleve from './components/ContrasteEleve';
import { useState } from 'react';

function App() {
  const [contrasteEleve, setContrasteEleve] = useState(false)
  const handleContrasteEleve = (v) => {
    setContrasteEleve(v)
  }
  return (
    <div className='container'>
      {/* <Header /> */}
      <Avantages contrasteEleve={contrasteEleve}></Avantages>
      <ContrasteEleve hangleContrasteEleve={handleContrasteEleve} />
    </div>
  );
}

export default App;
