import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import torehaarberg from "../images/torehaarberg.png";

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
                            <img src={torehaarberg} alt="Tore Haarberg" />
                        </div>
                    </div>

                    <h3 className="smud-h3 smud-talks__talk-title">Det blåser nordavind fra alle kanter</h3>

                    <h4 className="smud-h4">Tore Haarberg</h4>
                    <div>
                        Tore har siden 2013 ledet flere deler av SpareBank 1 Utviklings virksomhet, og har nå ansvar for betalingsområdet.
                        I perioden 2000 til 2013 var han konserndirektør for privatmarked og viseadministrerende direktør i SpareBank 1 SMN.
                        Før dette arbeidet Tore i Arthur Andersen Business Consulting, BN Bank og Danske Bank. Han har også flere års erfaring
                        fra styrearbeid i ulike selskaper, og er i dag engasjert i Vipps AS, Bits AS og SpareBank 1 Kreditt AS.
                    </div>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Et konkurransebilde i rask endring, tekniske nyvinninger, endret kundeadferd, og ny regulering innebærer ofte store omveltninger.
                        Med hyppige og kraftfulle endringer blir det langt vanskeligere å planlegge på lang sikt. Dette utfordrer vante tenke- og arbeidsmåter.
                        Tore Haarberg gir et innblikk i hvordan SpareBank 1-alliansen har innrettet seg for å møte dette offensivt.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage