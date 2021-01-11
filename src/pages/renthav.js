import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import kristineursfjord from "../images/kristineursfjord.png";

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
                            <img src={kristineursfjord} alt="Kristine Ursfjord" />
                        </div>
                    </div>

                    <h3 className="smud-h3 smud-talks__talk-title">2,1 millioner bidrag til et renere hav</h3>

                    <h4 className="smud-h4">Kristine Ursfjord</h4>
                    <div>
                        Kristine jobber med partnerskap til felles glede for privatmarkedskundene våre,
                        og at vi i SpareBank 1 Utvikling skal bidra godt til å bevare SpareBank 1s gode navn og rykte på bærekraft.
                    </div>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Hvordan integrerer man egentlig bærekraft i alle prosesser?
                        Hvordan behovet for nye kort, ble et lite steg for et mer plastfritt hav.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage