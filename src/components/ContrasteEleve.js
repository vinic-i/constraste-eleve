import React from 'react'
import './ContrasteEleve.css'

const ContrasteEleve = ({ hangleContrasteEleve }) => {
  const noContraste = () => {
    document.body.classList.remove('bg-white');
    document.body.classList.remove('bg-black');
    document.body.removeAttribute('data-ac-activated');
    hangleContrasteEleve(false)
  }
  const setJouneNoir = () => {
    document.body.classList.remove('bg-white');
    document.body.classList.add('bg-black');
    document.body.setAttribute('data-ac-activated', 'joune-noir');
    hangleContrasteEleve(true)
  }
  const setBlancBleu = () => {
    document.body.classList.remove('bg-black');
    document.body.classList.add('bg-white');
    document.body.setAttribute('data-ac-activated', 'blanc-bleu');
    hangleContrasteEleve(true)
  }
  return (
    <div className='contrasteContainer'>
      <button
        onClick={noContraste}
        className='blancBleu grow visible'>Sem</button>
      <button
        onClick={setJouneNoir}
        className='jouneNoir grow'>Op 1</button>
      <button
        onClick={setBlancBleu}
        className='blancBleu grow'>Op 2</button>
    </div>
  )
}

export default ContrasteEleve