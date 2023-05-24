import React from 'react'
import './HeroJouneNoir.css'
import './HeroBlancBleu.css'
import './HeroJouneBleu.css'
import './HeroBleuNoir.css'

const Hero = ({ contrasteEleve }) => {
    const homeHeaderSlideStyle = {
        zIndex: -1,
        backgroundImage: contrasteEleve ? "url('./visualizer/normal-bw.png')" : "url('./visualizer/normal.png')"
    }
    const positionRelative = {
        position: 'relative'
    }
    return (
        <div style={positionRelative}>
            <article class="home_header_slide" style={homeHeaderSlideStyle} id="home_header_354548235313909637c1e95d2e54086e">
                <div class="container">
                    <div class="texts texts-white">
                        <h1 class="title">Les meilleurs planchers de bois franc</h1>
                        <h2 class="location">
                            Fièrement
                            <img class="location-icon" src={contrasteEleve === 2 ? "./hero/made_in_quebec-white-bw.png" : "./hero/made_in_quebec-white.png"} alt="icon" /> Québécois! </h2>
                        <a id="heroButton" class="texts-cta" href="https://www.planchersmirage.com/fr/planchers-bois-franc/">
                            Découvrez nos planchers
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Hero