import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Smud from '../components/smud'

import stories from '../images/stories.png';
import sb1logo from '../images/sb1logo.png';

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
                        Vi er klare! Kl. 10 braker det løs!
                    </span>
                </h2>
                <a href="https://www.pilot.intern.sparebank1.no/smud/" className="smud-register">
                    Teams Live
                </a>
                
                <div className="smud-sb1-network">
                    <p>
                        <span>PSST! Du må være på SpareBank 1 sitt nettverk for kunne nå Teams Live lenken.</span>
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
