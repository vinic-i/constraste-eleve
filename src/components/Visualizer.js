import React from 'react'
import './VisualizerJouneNoir.css'
import './VisualizerBlancBleu.css'
import './VisualizerJouneBleu.css'
import './VisualizerBleuNoir.css'

const Visualizer = ({ contrasteEleve }) => {
    const styles = {
        backgroundImage: contrasteEleve ? "url('./normal-bw.png')" : "url('./normal.png')",
        zIndex: -1
    }
    return (
        <section class="visualizer">
            <div class="container">
                <h2 class="line_through_title visualizer-title">Décorateur virtuel Mirage</h2>
                <div class="subtitle visualizer-subtitle">Visualisez votre plancher de bois franc de rêve <nobr>en 3 étapes!</nobr></div>
                <div class="content visualizer-content" style={styles}>
                    <img class="visualizer-instavuHand" src={contrasteEleve ? "./instavu-mockup-fr-bw.png" : "./instavu-mockup-fr.png"} alt="" />
                    <span class="visualizer-text1">Imaginez</span>
                    <span class="visualizer-text2">votre plancher<br /> de rêve avec</span>
                    <img class="visualizer-instavuLogo" src={contrasteEleve ? "./instavu-logo-bw.png" : "./instavu-logo.png"} alt="" />

                </div>
            </div>
        </section>
    )
}

export default Visualizer