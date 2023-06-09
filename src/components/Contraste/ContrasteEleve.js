import React from 'react'
import './ContrasteEleve.css'

const ContrasteEleve = ({ hangleContrasteEleve }) => {
  const noContraste = () => {
    document.body.className = '';
    document.body.classList.remove('bg-black');
    document.body.removeAttribute('data-ac-activated');
    hangleContrasteEleve(0)
  }
  const setJouneNoir = () => {
    document.body.className = '';
    document.body.classList.add('bg-black');
    document.body.setAttribute('data-ac-activated', 'joune-noir');
    hangleContrasteEleve(1)
  }
  const setBlancBleu = () => {
    document.body.className = '';
    document.body.classList.add('bg-white');
    document.body.setAttribute('data-ac-activated', 'blanc-bleu');
    hangleContrasteEleve(2)
  }
  const setJouneBlue = () => {
    document.body.className = '';
    document.body.classList.add('bg-blue');
    document.body.setAttribute('data-ac-activated', 'joune-bleu');
    hangleContrasteEleve(3)
  }
  const setBlueNoir = () => {
    document.body.className = '';
    document.body.classList.add('bg-black');
    document.body.setAttribute('data-ac-activated', 'bleu-noir');
    hangleContrasteEleve(4)
  }
  return (
    <div className='contrasteContainer'>
      <button
        onClick={noContraste}
        className='grow visible'>N</button>
      <button
        onClick={setJouneNoir}
        className='jouneNoir grow'>A</button>
      <button
        onClick={setBlancBleu}
        className='blancBleu grow'>A</button>
      <button
        onClick={setJouneBlue}
        className='jouneBleu grow'>A</button>
      <button
        onClick={setBlueNoir}
        className='bleuNoir grow'>A</button>
    </div>
  )
}

export default ContrasteEleve