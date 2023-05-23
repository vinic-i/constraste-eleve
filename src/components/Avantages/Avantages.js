import './Avantages.css'

const Avantages = ({ contrasteEleve }) => {
    console.log(contrasteEleve)

    return (
        <div className="benefits">
            <h2 className="title">
                Les avantages Mirage</h2>
            <div className="benefitsList">
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/voted-no1.png' : './avantages/voted-no1-bw.png'} alt=""></img>
                    <p>Proclamé numéro 1 en qualité par les détaillants de recouvrement de plancher nord-américains</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/most-wear-resistant.png' : './avantages/most-wear-resistant-bw.png'} alt=""></img>
                    <p> La meilleure résistance à l'usure dans l'industrie du plancher de bois franc</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/hypoallergenic.png' : './avantages/hypoallergenic-bw.png'} alt=""></img>
                    <p>Fini hypoallergénique pour un environnement sain</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/more-than-1400.png' : './avantages/more-than-1400-bw.png'} alt=""></img>
                    <p>La plus grande combinaison de couleurs, largeurs, essences et lustres</p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/best-choice.png' : './avantages/best-choice-bw.png'} alt=""></img>
                    <p> Le meilleur choix pour l'environnement </p>
                </div>
                <div className="benefit">
                    <img src={!contrasteEleve ? './avantages/made_in_quebec.png' : './avantages/made_in_quebec-bw.png'} alt=""></img>
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