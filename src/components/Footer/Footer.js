import React from 'react'
import './FooterJouneNoir.css'
import './FooterBlancBleu.css'
import './FooterJouneBleu.css'
import './FooterBleuNoir.css'


const Footer = ({ contrasteEleve }) => {
    return (
        <div>
            <footer className="mainFooter" xmlns="http://www.w3.org/1999/html">
                <div className="mainFooter-container">
                    <div className="mainFooter-topRow">
                        <div className="footerAccess">
                            <div className="footerAccess-proSpace">
                                <a href="https://www.planchersmirage.com/pro/fr/">
                                    <img className="footerAccess-image" src={contrasteEleve === 1 || contrasteEleve === 3 || contrasteEleve === 4 ? './footer/btn_icon_pro-negative.png' : './footer/btn_icon_pro.png'} alt="Espace Pro" />
                                    <p className="footerAccess-title">
                                        <span className='span-1'>Espace</span><br></br>
                                        <span className="span-2">Pro</span>
                                    </p>
                                    <p className="footerAccess-subtitle">Architectes<br></br>et designers</p>
                                </a>
                            </div>
                            <div className="footerAccess-clientAccess">
                                <a href="https://boaprod365.operations.dynamics.com/?cmp=boa">
                                    <img className="footerAccess-image" src={contrasteEleve === 1 || contrasteEleve === 3 || contrasteEleve === 4 ? './footer/btn_icon_extranet-negative.png' : './footer/btn_icon_extranet.png'} alt="Accès Client" />
                                    <p className="footerAccess-title">
                                        <span className='span-1'>Accès</span><br></br>
                                        <span className="span-2">Client</span>
                                    </p>
                                    <p className="footerAccess-subtitle">Distributeurs<br></br>et Détaillants</p>
                                </a>
                            </div>
                        </div>
                        <nav className="footerMenu">
                            <ul className="footerMenu-list">
                                <li><a href="https://www.planchersmirage.com/fr/guides-et-soutien/">Guides et soutien</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/pourquoi-mirage/">Pourquoi Mirage</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/pourquoi-mirage/la-garantie/">Garantie Mirage</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/abc-du-plancher/nettoyer-votre-plancher/">Entretien</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/produits-pour-retouches/">Réparations</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/nouvelles/">Nouvelles</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/faq/">FAQ</a></li>
                                <li><a href="https://www.planchersmirage.com/fr/abc-du-plancher/glossaire/">Glossaire</a></li>
                            </ul>
                        </nav>
                        <div className="footerSample">
                            <a href="https://www.planchersmirage.com/fr/echantillons/">
                                <img className="footerSamplesNegative" src={contrasteEleve ? './footer/footer_cta_samples-bw-nb.png' : './footer/footer_cta_samples.png'} alt="échantillons essences et teintes" />
                                <span className="footerSample-orderSample">Obtenez jusqu'à<br></br>4 échantillons</span>
                                <span className="footerSample-for">GRATUITEMENT</span>
                            </a>
                        </div>
                        <div className="footerContact footer-mobile">
                            <div className="footerContact-newsletter">
                                <div className="newsletter-titleContainer">
                                    <span>S'abonner à<br />l'infolettre Mirage</span>
                                    <img src={contrasteEleve === 1 || contrasteEleve === 3 || contrasteEleve === 4 ? './footer/footer_newsletter-negative.png' : './footer/footer_newsletter.png'} alt="S'abonner à<br>l'infolettre Mirage" />
                                </div>

                                <form id="js-newsletterForm" className="js-newsletterForm" action="/newsletter" method="POST">
                                    <input name="recaptcha_token" className="js-recaptcha-token" type="hidden" value=""></input>
                                    <span className="form-input"><input type="email" id="newsletter_email" name="newsletter_email" className="form-control" placeholder="Adresse courriel"></input></span>
                                    <button className='grow' type="button" aria-label="Soumettre">
                                        <span className="arrow"></span>
                                    </button>
                                </form>
                            </div>
                            <a href="https://www.planchersmirage.com/fr/contact/" className="footerContact-joinUs">
                                Contactez-nous </a>
                        </div>
                        <div className="footer-corpoColumn">
                            <a className="footer-aboutButton" href="https://www.planchersmirage.com/fr/corpo/">
                                <img src={contrasteEleve ? './footer/logo-mirage-corpo-white-bw.png' : './footer/logo-mirage-corpo-white.png'} alt="Mirage" />
                                <span>À propos</span>
                            </a><a className="footer-careersButton" href="https://www.planchersmirage.com/fr/corpo/#carrieres">Carrières</a> </div>
                    </div>

                </div > </footer >
        </div>
    )
}

export default Footer