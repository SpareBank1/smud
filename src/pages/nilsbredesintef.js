import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import nilsbredemoe from "../images/nilsbredemoe.png";

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
                            <img src={nilsbredemoe} alt="Nils Brede Moe" />
                        </div>
                    </div>

                    <h3 className="smud-h3 smud-talks__talk-title">Hva kjennetegner team som lykkes med å lage de beste produktene?</h3>

                    <h4 className="smud-h4">Nils Brede Moe</h4>
                    <div>
                        Nils Brede Moe er Sjefforsker ved SINTEF Digital og forsker på Lean Startup, prosessforbedring, smidig storskala systemutvikling, autonome team og global systemutvikling. Han jobber tett med mange globalt firma innen bransjene energi, telekom, transport og finans. I tillegg jobber han med flere konsulentfirma, programvarehus og offentlig sektor i Norge. Han har også en forskningsstilling ved Blekinge Institute of Technology i Sverige.
                    </div>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Gjennom vår forskning i Spotify, Ericsson, store norske bedrifter og organisasjoner har vi funnet hva som kjennetegner de autonome team som ser ut til å fungere godt og de team som har utfordringer.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage