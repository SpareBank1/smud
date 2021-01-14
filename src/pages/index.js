import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Smud from '../components/smud'

import stories from '../images/stories.png';

import oyvindaass from '../images/oyvind.png';
import annegundersen from '../images/annegundersen.png';
import christianfjestad from '../images/christianfjestad.png';
import elisabethhaug from '../images/elisabethhaug.png';
import kristineursfjord from '../images/kristineursfjord.png';
import martheslaatsveen from '../images/martheslaatsveen.png';
import moyfridrisdal from '../images/moyfridrisdal2.png';
import nilsbredemoe from '../images/nilsbredemoe.png';
import olahast from '../images/olahast.png';
import stianconradsen from '../images/stianconradsen.png';
import sveinskovly from '../images/sveinskovly.png';
import thomasnygaard from '../images/thomasnygaard.png';
import torehaarberg from '../images/torehaarberg.png';
import vidarmoe from '../images/vidarmoe.png';

import { Link } from 'gatsby-plugin-modal-routing'

const IndexPage = (props) => (
  <Layout>
    <SEO title="SpareBank 1 [smu:d]" keywords={[`sparebank 1`, `utvikling`]} />

    <Header/>

    <section className="smud-page smud-page--1" id="page-1">
        <div className="smud-page__container">
            <Smud />
            <p>En produktkonferanse i regi av SpareBank 1 Utvikling for hele alliansen</p>
            <svg viewBox="0 0 182 40" xmlns="http://www.w3.org/2000/svg" className="smud-logo">
                <title>
                    SpareBank 1
                </title>
                <g fill="none" fill-rule="evenodd">
                    <path d="M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828"
                        fill="#F00000" />
                    <path d="M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17"
                        fill="#B40000" />
                    <path d="M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734"
                        fill="#FFF" />
                    <path d="M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z"
                        fill="#FFF" />
                </g>
            </svg>
        </div>
    </section>

    <main>
        <section className="smud-page smud-page--2" id="page-2">
            <div className="smud-page__container">
                <h2 className="smud-h2">Historiene bak gode, brukervennlige produkter som kundene elsker og som skaper forretningsverdi</h2>
                <img src={stories} className="smud-stories" alt="" />
            </div>
        </section>

        <section className="smud-page smud-page--3" id="page-3">
            <div className="smud-page__container">
                <h2 className="smud-h2">14. januar braker det løs!</h2>
                <div className="smud-talks">
                    <ul className="smud-talks__list">
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={oyvindaass} alt="Øyvind Aass" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">10.00 - 10.10: Velkommen</h3>
                                <p className="smud-talks__speaker-name">Øyvind Aass</p>
                                <p className="smud-talks__speaker-title">Administrerende direktør i SpareBank 1 Utvikling</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={torehaarberg} alt="Tore Haarberg" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">10.10 - 10.25: Det blåser nordavind fra alle kanter</h3>
                                <p className="smud-talks__speaker-name">Tore Haarberg</p>
                                <p className="smud-talks__speaker-title">Direktør/Lagleder på betalingsområdet i SpareBank 1 Utvikling</p>
                                <Link to="/nordavind/" asModal>Les mer</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--4" id="page-4">
            <div className="smud-page__container">
                <h2 className="smud-h2">Hvordan bygge produkter som kundene elsker?</h2>
                <div className="smud-talks">
                    <ul className="smud-talks__list">
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={annegundersen} alt="Anne Gundersen" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">10.30 - 10.55: Verdifulle problemer</h3>
                                <p className="smud-talks__speaker-name">Anne Gundersen</p>
                                <p className="smud-talks__speaker-title">UX-Strateg i SpareBank 1 Utvikling</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image smud-talks__speaker-image--pair">
                                    <img src={thomasnygaard} alt="Thomas Nygaard" />
                                    <img src={martheslaatsveen} alt="Marthe Slaatsveen" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">11.00 - 11.25: "Ikke nok et jævla statusmøte"</h3>
                                <p className="smud-talks__speaker-name">Marthe Slaatsveen og Thomas Nygaard</p>
                                <p className="smud-talks__speaker-title">Områdeleder og produkteier i SpareBank 1 Utvikling</p>
                                <Link to="/marthethomas/" asModal>Les mer</Link>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={elisabethhaug} alt="Elisabeth Haug" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">11.30 - 11.50: Vipps Mobil – Hvordan forenkle og forandre Telekom på rekordfart?</h3>
                                <p className="smud-talks__speaker-name">Elisabeth Haug</p>
                                <p className="smud-talks__speaker-title">Leder for Powered by Vipps/New business i Vipps</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--5" id="page-5">
            <div className="smud-page__container">
                <h2 className="smud-h2">Hvordan skape høypresterende team?</h2>
                <div className="smud-talks">
                    <ul className="smud-talks__list">
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={nilsbredemoe} alt="Nils Brede Moe" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">12.30 - 12.55: Hva kjennetegner team som lykkes med å lage de beste produktene?</h3>
                                <p className="smud-talks__speaker-name">Nils Brede Moe</p>
                                <p className="smud-talks__speaker-title">Chief Scientist i SINTEF Digital</p>
                                <Link to="/nilsbredesintef/" asModal>Les mer</Link>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={stianconradsen} alt="Stian Conradsen" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">13.00 - 13.25: "Torsdag er den nye lørdagen!" - Hvorfor bruker vi en arbeidsdag i uka på fag?</h3>
                                <p className="smud-talks__speaker-name">Stian Conradsen</p>
                                <p className="smud-talks__speaker-title">Utvikler i SpareBank 1 Utvikling</p>
                                <Link to="/torsdag-er-den-nye-lordagen/" asModal>Les mer</Link>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image smud-talks__speaker-image--pair">
                                    <img src={olahast} alt="Ola Hast" />
                                    <img src={vidarmoe} alt="Vidar Moe" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">13.30 - 13.55: Det skal være lett å gjøre rett</h3>
                                <p className="smud-talks__speaker-name">Vidar Moe og Ola Hast</p>
                                <p className="smud-talks__speaker-title">Utviklere i SpareBank 1 Utvikling</p>
                                <Link to="/olavidar/" asModal>Les mer</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--6" id="page-6">
            <div className="smud-page__container">
                <h2 className="smud-h2">Elskverdige eksempler</h2>
                <div className="smud-talks">
                    <ul className="smud-talks__list">
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={moyfridrisdal} alt="Møyfrid Risdal" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">14.10 - 14.20: Bank + Regnskap: Å lage et produkt av det vi allerede har</h3>
                                <p className="smud-talks__speaker-name">Møyfrid Risdal</p>
                                <p className="smud-talks__speaker-title">Senior Prosjektleder i SR-Bank</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={christianfjestad} alt="Christian Fjestad" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">14.20 - 14.30: Hvordan SpareBank 1 ble først med abonnementshåndtering i mobilbanken</h3>
                                <p className="smud-talks__speaker-name">Christian Fjestad</p>
                                <p className="smud-talks__speaker-title">Leder Innovasjon i SpareBank 1 Østlandet</p>
                                <Link to="/abonnement/" asModal>Les mer</Link>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={kristineursfjord} alt="Kristine Ursfjord" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">14:30 - 14.40: 2,1 millioner bidrag til et renere hav</h3>
                                <p className="smud-talks__speaker-name">Kristine Ursfjord</p>
                                <p className="smud-talks__speaker-title">Bærekraftsambassadør i SpareBank 1 Utvikling</p>
                                <Link to="/renthav/" asModal>Les mer</Link>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={sveinskovly} alt="Svein Skovly" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">14.40 - 14.50: Hvorfor innovasjon er best i store bedrifter</h3>
                                <p className="smud-talks__speaker-name">Svein Skovly</p>
                                <p className="smud-talks__speaker-title">Leder Innovasjon i Fremtind Forsikring</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--7" id="page-7">
            <div className="smud-page__container">
                <h2 className="smud-h2 smud-holdthedate">
                    <span>
                        Årets smud er over! Takk for deltakelsen! Gi oss gjerne en tilbakemelding
                    </span>
                </h2>
                <a href="https://www.pilot.intern.sparebank1.no/smud/" className="smud-register">
                    Tilbakemelding
                </a>
                
                <div className="smud-sb1-network">
                    <p>
                        <span>PSST! Du må være på SpareBank 1 sitt nettverk for kunne gi tilbakemelding.</span>
                        <span>Bruk derfor jobbmaskinen din med oppkoblet VPN.</span>
                    </p>
                    <p>
                        <span>Vi hjelper deg gjerne :)</span>
                        <span><a href="mailto:smud@sparebank1.no" className="smud-email">smud@sparebank1.no</a></span>
                    </p>
                </div>

                <svg viewBox="0 0 182 40" xmlns="http://www.w3.org/2000/svg" className="smud-logo">
                    <title>
                        SpareBank 1
                    </title>
                    <g fill="none" fill-rule="evenodd">
                        <path d="M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828"
                            fill="#F00000" />
                        <path d="M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17"
                            fill="#B40000" />
                        <path d="M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734"
                            fill="#FFF" />
                        <path d="M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z"
                            fill="#FFF" />
                    </g>
                </svg>
            </div>
        </section>
    </main>
  </Layout>
)

export default IndexPage
