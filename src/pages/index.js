import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Smud from '../components/smud'

import stories from '../images/stories.png';
import sb1logo from '../images/sb1logo.png';

import annegundersen from '../images/annegundersen.png';
import christianfjestad from '../images/christianfjestad.png';
import elisabethhaug from '../images/elisabethhaug.png';
import kristineursfjord from '../images/kristineursfjord.png';
import martheslaatsveen from '../images/martheslaatsveen.png';
import moyfridrisdal from '../images/moyfridrisdal.png';
import nilsbredemoe from '../images/nilsbredemoe.png';
import olahast from '../images/olahast.png';
import stianconradsen from '../images/stianconradsen.png';
import sveinskovly from '../images/sveinskovly.png';
import thomasnygaard from '../images/thomasnygaard.png';
import torehaarberg from '../images/torehaarberg.png';
import vidarmoe from '../images/vidarmoe.png';

const IndexPage = (props) => (
  <Layout>
    <SEO title="SpareBank 1 [smu:d]" keywords={[`sparebank 1`, `utvikling`]} />

    <Header/>

    <section className="smud-page smud-page--1" id="page-1">
        <div className="smud-page__container">
            <Smud />
            <p>En produktkonferanse i regi av SpareBank 1 Utvikling for hele alliansen</p>
            <img src={sb1logo} className="smud-logo" alt="SpareBank 1 Logo" />
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
                <h2 className="smud-h2">Hvordan bygge produkter som kundene elsker?</h2>
                <div className="smud-talks">
                    <ul className="smud-talks__list">
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={torehaarberg} alt="Tore Haarberg" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Det blåser nordavind fra alle kanter</h3>
                                <p className="smud-talks__speaker-name">Tore Haarberg</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={annegundersen} alt="Anne Gundersen" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Lønnsomme problemer</h3>
                                <p className="smud-talks__speaker-name">Anne Gundersen</p>
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
                                <h3 className="smud-h3 smud-talks__talk-title">"Ikke nok et jævla statusmøte"</h3>
                                <p className="smud-talks__speaker-name">Marthe Slaatsveen og Thomas Nygaard</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={elisabethhaug} alt="Elisabeth Haug" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Vipps Mobil – Hvordan forenkle og forandre Telekom på rekordfart?</h3>
                                <p className="smud-talks__speaker-name">Elisabeth Haug</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--4" id="page-4">
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
                                <h3 className="smud-h3 smud-talks__talk-title">Hva kjennetegner team som lykkes med å lage de beste produktene?</h3>
                                <p className="smud-talks__speaker-name">Nils Brede Moe</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={stianconradsen} alt="Stian Conradsen" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Torsdag er den nye lørdagen!</h3>
                                <p className="smud-talks__speaker-name">Stian Conradsen</p>
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
                                <h3 className="smud-h3 smud-talks__talk-title">Lett å gjøre rett</h3>
                                <p className="smud-talks__speaker-name">Vidar Moe og Ola Hast</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--5" id="page-5">
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
                                <h3 className="smud-h3 smud-talks__talk-title">Bank + Regnskap: Å lage et produkt av det vi allerede har</h3>
                                <p className="smud-talks__speaker-name">Møyfrid Risdal</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={kristineursfjord} alt="Kristine Ursfjord" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">2,1 millioner bidrag til et renere hav</h3>
                                <p className="smud-talks__speaker-name">Kristine Ursfjord</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={christianfjestad} alt="Christian Fjestad" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Hvordan SpareBank 1 ble først med abonnementshåndtering i mobilbanken</h3>
                                <p className="smud-talks__speaker-name">Christian Fjestad</p>
                            </div>
                        </li>
                        <li className="smud-talks__item">
                            <div>
                                <div className="smud-talks__speaker-image">
                                    <img src={sveinskovly} alt="Svein Skovly" />
                                </div>
                            </div>
                            <div className="smud-talks__talk">
                                <h3 className="smud-h3 smud-talks__talk-title">Hvorfor innovasjon er best i store bedrifter</h3>
                                <p className="smud-talks__speaker-name">Svein Skovly</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="smud-page smud-page--6" id="page-6">
            <div className="smud-page__container">
                <h2 className="smud-h2 smud-holdthedate">
                    <span>
                        Hold av datoen <time datetime="2021-01-14">14. januar 2021!</time>
                    </span>
                </h2>
                <a href="https://www.pilot.intern.sparebank1.no/smud/" className="smud-register">
                    Påmelding!
                </a>
                
                <div className="smud-sb1-network">
                    <p>
                        <span>PSST! Du må være på SpareBank 1 sitt nettverk for kunne melde deg på.</span>
                        <span>Bruk derfor jobbmaskinen din med oppkoblet VPN.</span>
                    </p>
                    <p>
                        <span>Vi hjelper deg gjerne :)</span>
                        <span><a href="mailto:smud@sparebank1.no" className="smud-email">smud@sparebank1.no</a></span>
                    </p>
                </div>

                <img src={sb1logo} className="smud-logo" alt="SpareBank 1 Logo" />
            </div>
        </section>
    </main>
  </Layout>
)

export default IndexPage
