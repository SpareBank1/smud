import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import stianconradsen from "../images/stianconradsen.png";

const ModalExamplePage = () => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <div>
                {modal ? (
                    <Link to={closeTo} className="smud-close">
                        Lukk
                    </Link>
                ) : (
                    <header>
                    </header>
                )}

                    <div>
                        <div className="smud-talks__speaker-image">
                            <img src={stianconradsen} alt="Stian Conradsen" />
                        </div>
                    </div>

                    <h3 className="smud-h3 smud-talks__talk-title">"Torsdag er den nye lørdagen!" - Hvorfor bruker vi en arbeidsdag i uka på fag?</h3>

                    <h4 className="smud-h4">Stian Conradsen</h4>
                    <div>
                        Primært utvikler, men i år også avdelingsleder for våre fantastiske utviklere. Jeg har kodet nettbank og mobilbank i SpareBank 1 de siste 11 årene.
                    </div>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Hvordan sikrer vi kontinuerlig læring i en kunnskapsbedrift? SpareBank 1 Utvikling har i to år brukt en arbeidsdag i uken på fag. Denne dagen forlater vi det trygge teamet vårt, og samler oss i nye selvorganiserende grupperinger. Vi bruker dagene på kursing, vi koder nye løsninger, vi lager foredrag og vi gjør forbedringer på fellesløsninger. Jeg vil fortelle om hvordan vi fikk ledelsen med på ideen om en fagdag pr. uke. Jeg vil også fortelle om hvordan vi gjennomfører denne dagen, samt hvilke resultater vi har oppnådd.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage