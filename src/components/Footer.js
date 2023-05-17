import React from 'react'
import './Footer.css'

const Footer = ({contrasteEleve}) => {
    return (
        <div>
            <footer className="mainFooter" xmlns="http://www.w3.org/1999/html">
                <div className="mainFooter-container">
                    <div className="mainFooter-topRow">
                        <div className="footerAccess">
                            <div className="footerAccess-proSpace">
                                <a href="https://www.planchersmirage.com/pro/fr/">
                                    <img className="footerAccess-image" src="https://media.planchersmirage.com/theme/_common/images//footer/btn_icon_pro/0bf54f8a08ca5e7368eea9a23f88094421b92944/btn_icon_pro.png" alt="Espace Pro" />
                                    <p className="footerAccess-title">
                                        <span>Espace</span><br></br>
                                        <span>Pro</span>
                                    </p>
                                    <p className="footerAccess-subtitle">Architectes<br></br>et designers</p>
                                </a>
                            </div>
                            <div className="footerAccess-clientAccess">
                                <a href="https://boaprod365.operations.dynamics.com/?cmp=boa">
                                    <img className="footerAccess-image" src="https://media.planchersmirage.com/theme/_common/images//footer/btn_icon_extranet/197610783319d87e3b7e1db590e7fdd798073759/btn_icon_extranet.png" alt="Accès Client" />
                                    <p className="footerAccess-title">
                                        <span>Accès</span><br></br>
                                        <span>Client</span>
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
                            <a href="https://www.planchersmirage.com/fr/echantillons/"><img className='footerSamplesNegative' src="./footer_cta_samples-negative.png" alt="échantillons essences et teintes" />
                                <span className="footerSample-orderSample">Obtenez jusqu'à<br></br>4 échantillons</span>
                                <span className="footerSample-for">GRATUITEMENT</span>
                            </a>
                        </div>
                        <div className="footerContact footer-mobile">
                            <div className="footerContact-newsletter">
                                <div className="newsletter-titleContainer">
                                    <span>S'abonner à<br></br>l'infolettre Mirage</span>
                                    <img src="https://media.planchersmirage.com/theme/_common/images//footer/footer_newsletter/b1cec1d6660c9eabf005b1f68edf5dd9db9ec60c/footer_newsletter.svg" alt="S'abonner à<br></br>l'infolettre Mirage" />
                                </div>

                                <form id="js-newsletterForm" className="js-newsletterForm" action="/newsletter" method="POST">
                                    <input name="recaptcha_token" className="js-recaptcha-token" type="hidden" value=""></input>
                                    <span className="form-input"><input type="email" id="newsletter_email" name="newsletter_email" className="form-control" placeholder="Adresse courriel"></input></span><button type="button" aria-label="Soumettre">
                                        <span className="arrow"></span>
                                    </button>
                                </form>
                            </div>
                            <a href="https://www.planchersmirage.com/fr/contact/" className="footerContact-joinUs">
                                Contactez-nous </a>
                        </div>
                        <div className="footer-corpoColumn">
                            <a className="footer-aboutButton" href="https://www.planchersmirage.com/fr/corpo/">
                                <img src="https://media.planchersmirage.com/theme/_common/images//footer/logo-mirage-corpo-white/b176884945df4d17e459fdc86f2c3646a490dd9e/logo-mirage-corpo-white.svg" alt="Mirage" />
                                <span>À propos</span>
                            </a><a className="footer-careersButton" href="https://www.planchersmirage.com/fr/corpo/#carrieres">Carrières</a> </div>
                    </div>

                </div > </footer >
        </div>
    )
}

export default Footer

// import React, { useState } from 'react'
// import './Footer.css'

// const Footer = ({ contrasteEleve }) => {
//     return (
//         <footer>
//             <div className="">
//                 <div className="mainFooter-bottomRow">
//                     <div className="footerCopyright footer-mobile"><span>© 2023 Mirage</span></div>
//                     <div className="footerSiteInfo footer-mobile">
//                         <nav className="footerSiteInfo-nav">
//                             <ul>
//                                 <li><a href="https://www.planchersmirage.com/fr/politique-de-vente/">Politique de vente</a></li><li><a href="https://www.planchersmirage.com/fr/politique-de-confidentialite/">Confidentialité</a></li> </ul>
//                         </nav>
//                     </div>
//                     <div className="footerProud footer-mobile">
//                         <span>Fièrement<img src="https://media.planchersmirage.com/theme/_common/images//footer/footer_made_in_quebec/7498290f67d331595eae7c689c0423da94607e83/footer_made_in_quebec.svg" alt="Fièrement Québecois" />Québecois</span>
//                     </div>
//                     <div className="footerContact-phoneNumber footer-mobile">
//                         <a href="tel:1-800-463-1303">
//                             <img src="https://media.planchersmirage.com/theme/_common/images/footer/footer_phone/bff66f75635b0fcaee524af2b2abda0ede9b1891/footer_phone.svg" alt="Téléphone" />
//                             <span>1 800 463-1303</span>
//                         </a>
//                     </div>
//                     <div className="footerSocialmedia footer-mobile">
//                         <nav className="footerSocialmedia-container">
//                             <ul>
//                                 <li><a className="instagram" href="https://www.instagram.com/miragefloors/" target="_blank"><img src="https://media.planchersmirage.com/theme/_common/images//footer/social_instagram/5e798a9d994f6477ae3a7ee03c37852ecf4c8e81/social_instagram.svg" alt="Instagram" /></a></li>
//                                 <li><a className="facebook" href="https://www.facebook.com/MirageHardwoodFloors/" target="_blank"><img src="https://media.planchersmirage.com/theme/_common/images//footer/social_facebook/f4e6d91735c6a310e18e139e8cb56b002c15b545/social_facebook.svg" alt="Facebook" /></a></li>
//                                 <li><a className="pinterest" href="https://www.pinterest.ca/miragefloors/" target="_blank"><img src="https://media.planchersmirage.com/theme/_common/images//footer/social_pinterest/7ddef6a973d7dd4645e3750860caa5a80dd6cfa6/social_pinterest.svg" alt="Pinterest" /></a></li>
//                                 <li><a className="youtube" href="https://www.youtube.com/user/MirageFloors" target="_blank"><img src="https://media.planchersmirage.com/theme/_common/images//footer/social_youtube/d9cc8510a59b02b9caef1b68183181701a833540/social_youtube.svg" alt="Youtube" /></a></li>
//                                 <li><a className="houzz" href="https://www.houzz.com/professionals/hardwood-flooring-dealers-and-installers/mirage_hardwood-floors-pfvwus-pf~1670238214?" target="_blank"><img src="https://media.planchersmirage.com/theme/_common/images//footer/social_houzz/3e0147608efa7365049d6df6791eb71cb283a3b3/social_houzz.svg" alt="Houzz" /></a></li>
//                             </ul >
//                         </nav >
//                     </div >
//                 </div >
//             </div>
//         </footer>
//     )
// }

// export default Footer