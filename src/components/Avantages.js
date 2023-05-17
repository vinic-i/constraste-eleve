import React, { useState } from 'react'
import './Avantages.css'
import Img1 from '../altoContraste/voted-no1.png'
import Img1Ac from '../altoContraste/voted-no1-ac.png'
import Img2 from '../altoContraste/most-wear-resistant.png'
import Img2Ac from '../altoContraste/most-wear-resistant-ac.png'
import Img3 from '../altoContraste/hypoallergenic.png'
import Img3Ac from '../altoContraste/hypoallergenic-ac.png'
import Img4 from '../altoContraste/more-than-1400.png'
import Img4Ac from '../altoContraste/more-than-1400-ac.png'
import Img5 from '../altoContraste/best-choice.png'
import Img5Ac from '../altoContraste/best-choice-ac.png'
import Img6 from '../altoContraste/made_in_quebec.png'
import Img6Ac from '../altoContraste/made_in_quebec-ac.png'

const Avantages = ({ contrasteEleve }) => {
    console.log(contrasteEleve)

    return (
        <div className="benefits">
            <h2 className="title">
                Les avantages Mirage</h2>
            <div className="benefitsList">
                <div className="benefit">
                    <img src={!contrasteEleve ? Img1 : Img1Ac} alt=""></img>
                    <p>Proclamé numéro 1 en qualité par les détaillants de recouvrement de plancher nord-américains</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? Img2 : Img2Ac} alt=""></img>
                    <p> La meilleure résistance à l'usure dans l'industrie du plancher de bois franc</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? Img3 : Img3Ac} alt=""></img>
                    <p>Fini hypoallergénique pour un environnement sain</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? Img4 : Img4Ac} alt=""></img>
                    <p>La plus grande combinaison de couleurs, largeurs, essences et lustres</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? Img5 : Img5Ac} alt=""></img>
                    <p> Le meilleur choix pour l'environnement </p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? Img6 : Img6Ac} alt=""></img>
                    <p>Fièrement Québécois</p>
                </div>
            </div>
            <a className="benefits-cta" href="https://www.planchersmirage.com/fr/pourquoi-mirage/la-qualite-mirage/">
                En savoir plus <img className="arrow-icon" src="https://media.planchersmirage.com/theme/_common/images/arrow-right/738ce20bf417ea9f848bb445a82fefc22cbbc8c5/arrow-right.png" alt=""></img>
            </a>
        </div>
    )
}

export default Avantages